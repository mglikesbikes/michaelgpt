import { Ai } from '@cloudflare/ai';

/**
 * Find an answer based on a query
 * @param q Question to look up
 */
export const query = async (
  platform: App.Platform,
  q: string
): Promise<{ success: boolean; a: string }> => {
  const ai = new Ai(platform.env.AI);

  // get the embeddings for the question
  const embeddings = await ai.run('@cf/baai/bge-base-en-v1.5', {
    text: [q]
  });

  console.log('>> query() got embeddings:', embeddings);

  // look up content that might match
  const vector_query = await platform.env.DATASET_VECTORS.query(
    embeddings.data[0],
    {} // topK is 3 by default
  );

  const qualifying_matches = vector_query.matches.filter(
    (m) => m.score >= 0.75
  );

  console.log(
    '>> query() got %d qualifying matches',
    qualifying_matches.length
  );

  const content_ids = qualifying_matches.map((m) => m.vectorId);
  const promises = content_ids.map((id) => platform.env.DATASET.get(id));
  const values = await Promise.all(promises);

  const system_prompt = [
    `You're a chatbot answering questions about Michael's resumé and work experience. Be courteous and professional, do NOT make stuff up (it's okay to say you don't know), and keep your answer short - under 500 characters. Summarize Michael's answers to similar questions.\n\nHere's Michael's answers to similar questions (no need to thank him):`
  ];

  values.forEach((v) => {
    if (v) {
      const { question, answer } = JSON.parse(v);
      system_prompt.push(`${question}`);
      system_prompt.push(`> ${answer}`);
    }
  });

  if (system_prompt.length === 1) {
    system_prompt.push(
      `Actually, he hasn't answered this question. Offer the user to ask Michael himself by emailing him.`
    );
  }

  const messages = [
    { role: 'system', content: system_prompt.join(`\n`) },
    { role: 'user', content: q }
  ];

  console.log(`>> prompt:\n`, JSON.stringify(messages, null, 2));

  const { response } = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
    messages
  });

  console.log(`>> response:\n`, response);

  return {
    success: true,
    a: response
  };
};
