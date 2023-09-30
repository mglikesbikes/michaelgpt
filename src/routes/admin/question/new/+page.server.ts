import { upsert } from '$lib/admin/ai/upsert';
import { form_data_validator } from '$lib/admin/zod/form_data_validator';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async (event) => {
    if (!event.platform) {
      console.error('>> missing event.platform');
      return;
    }

    const fd = await event.request.formData();
    const data = Object.fromEntries(fd);
    const valid = form_data_validator.safeParse(data);

    if (!valid.success) {
      return;
    }

    const { question, answer } = valid.data;
    const content_id = crypto.randomUUID();

    console.log('>> creating %s=%s with ID %s', question, answer, content_id);

    await upsert(event.platform, content_id, question, answer);

    throw redirect(302, `/admin?s=${content_id}`);
  }
} satisfies Actions;
