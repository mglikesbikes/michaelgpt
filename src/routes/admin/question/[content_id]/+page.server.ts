import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { form_data_validator } from '$lib/admin/zod/form_data_validator';
import { upsert } from '$lib/admin/ai/upsert';

export const load = (async (event) => {
  if (!event.platform) throw redirect(302, '/admin');

  const kv = await event.platform!.env.DATASET.get(event.params.content_id);

  if (!kv) throw error(404);

  const { question, answer } = JSON.parse(kv);

  return {
    question,
    answer
  };
}) satisfies PageServerLoad;

export const actions = {
  default: async (event) => {
    if (!event.platform) {
      return;
    }

    const fd = await event.request.formData();
    const data = Object.fromEntries(fd);
    const valid = form_data_validator.safeParse(data);

    if (!valid.success) {
      return;
    }

    const { question, answer } = valid.data;
    const content_id = event.params.content_id;

    console.log('>> updating %s=%s with ID %s', question, answer, content_id);

    await upsert(event.platform, content_id, question, answer);

    throw redirect(302, '/admin');
  }
} satisfies Actions;
