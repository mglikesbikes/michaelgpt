import { dev } from '$app/environment';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  if (event.route.id?.startsWith('/admin') && !dev) {
    throw redirect(304, '/');
  }

  return resolve(event);
};
