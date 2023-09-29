import type { PageServerLoad } from './$types';

export const load = (async (event) => {
  const dataset = await event.platform?.env.DATASET.list();

  return {
    dataset
  };
}) satisfies PageServerLoad;
