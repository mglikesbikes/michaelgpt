/**
 * Helper to create or update the data source
 */
export const upsert = async (
  platform: App.Platform,
  content_id: string,
  question: string,
  answer: string
): Promise<boolean> => {
  try {
    // first, store the q/a in KV
    await platform.env.DATASET.put(
      content_id,
      JSON.stringify({
        question,
        answer
      })
    );

    // spin up the AI helper

    // get the embeddings
    const embeddings = await platform.env.AI.run('@cf/baai/bge-base-en-v1.5', {
      text: [question, answer]
    });

    console.log('>> upsert() got embeddings:', embeddings);

    // insert it into Vectorize
    const vector_upsert = await platform.env.DATASET_VECTORS.upsert([
      {
        id: content_id,
        values: [...embeddings.data[0], ...embeddings.data[1]]
      }
    ]);

    console.log('>> upsert() wrote %d vectors', vector_upsert.count);
    return true;
  } catch (e) {
    console.error('>> upsert() caught:', e);
    return false;
  }
};
