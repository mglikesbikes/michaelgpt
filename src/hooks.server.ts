import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  if (
    event.route.id?.startsWith('/admin') &&
    event.platform?.env.IS_DEV !== 'true'
  ) {
    throw redirect(304, '/');
  }

  return resolve(event);
};
