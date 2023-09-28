<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  console.log(data.root);
</script>

<svelte:head>
  <title>MichaelGPT</title>
  <meta name="description" content="Ask my AI work-related questions" />
  <meta property="og:title" content="MichaelGPT" />
  <meta property="og:description" content="Ask my AI work-related questions" />
  <meta property="og:image" content="{data.root}/og-image.png" />
</svelte:head>
