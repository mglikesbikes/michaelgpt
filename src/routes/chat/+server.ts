import { z } from 'zod';
import type { RequestHandler } from './$types';
import { query } from '$lib/chat/query';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async (event) => {
  if (!event.platform)
    return json({
      success: false
    });

  const data = await event.request.json();
  const valid = z
    .object({
      q: z.string().min(1)
    })
    .safeParse(data);

  if (valid.success) {
    const result = await query(event.platform, valid.data.q);

    return json(result);
  }

  return json({
    success: false
  });
};
