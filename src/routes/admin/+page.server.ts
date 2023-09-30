import type { PageServerLoad } from './$types';

export const load = (async (event) => {
  const list: { id: string; question: string; answer: string }[] = [];
  const dataset = await event.platform!.env.DATASET.list();
  const promises = dataset.keys.map((kv) =>
    event.platform!.env.DATASET.get(kv.name)
  );
  const values = await Promise.all(promises);

  dataset.keys.forEach((key, i) => {
    const value = values[i];

    if (value) {
      const { question, answer } = JSON.parse(value);
      list.push({
        id: key.name,
        question,
        answer
      });
    }
  });

  return {
    list,
    pending_id: event.url.searchParams.get('s')
  };
}) satisfies PageServerLoad;
