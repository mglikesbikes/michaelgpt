import adapter from '@sveltejs/adapter-cloudflare-workers';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),

    // this should never be disabled, however, is required to be disabled
    // due to the unique way wrangler proxies dev mode
    csrf: {
      checkOrigin: false
    }
  }
};

export default config;
