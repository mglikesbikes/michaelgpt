<script lang="ts">
  import type { PageData } from './$types';

  import '@fontsource/roboto/400.css';
  import '@fontsource/roboto-slab/400.css';
  import '@fontsource/roboto-slab/800.css';
  import '../styles/global.scss';

  import Nav from '$lib/Nav.svelte';
  import Chat from '$lib/chat/Chat.svelte';
  import About from '$lib/about/About.svelte';

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

<Nav />
<Chat />
<About />

<style lang="scss">
  :global(html) {
    scroll-snap-type: x mandatory;
  }

  :global(body) {
    display: flex;
    align-items: flex-start;
    width: 100vw;
  }
</style>
