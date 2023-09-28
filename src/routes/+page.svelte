<script lang="ts">
  import type { PageData } from './$types';

  import '@fontsource/roboto/400.css';
  import '@fontsource/roboto-slab/400.css';
  import '@fontsource/roboto-slab/800.css';
  import '../styles/global.scss';

  import Main from '$lib/Main.svelte';

  export let data: PageData;
</script>

<svelte:head>
  <title>MichaelGPT</title>
  <meta name="description" content="Ask my AI work-related questions" />
  <meta property="og:title" content="MichaelGPT" />
  <meta property="og:description" content="Ask my AI work-related questions" />
  <meta property="og:image" content="{data.root}/og-image.png" />
  <meta name="viewport" content="width=device-width" />
</svelte:head>

<Main>
  <div slot="chat">
    <h2>Chat page</h2>
  </div>
  <div slot="about">
    <h2>About page</h2>
  </div>
</Main>
