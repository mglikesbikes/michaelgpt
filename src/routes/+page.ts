import type { PageLoad } from './$types';

export const load = ((event) => {
  return {
    root: `${event.url.protocol}//${event.url.host}`
  };
}) satisfies PageLoad;
