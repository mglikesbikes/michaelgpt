import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { destroy } from '$lib/admin/ai/destroy';

export const POST = (async (event) => {
  return json({
    success: await destroy(event.platform!, event.params.content_id),
    content_id: event.params.content_id
  });
}) satisfies RequestHandler;
