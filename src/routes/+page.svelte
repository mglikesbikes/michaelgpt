<script lang="ts">
  import type { PageData } from './$types';
  import { onMount } from 'svelte';

  import '@fontsource/roboto/400.css';
  import '@fontsource/roboto-slab/400.css';
  import '@fontsource/roboto-slab/800.css';
  import '$lib/styles/app.scss';

  import Nav from '$lib/nav/Nav.svelte';
  import Section from '$lib/Section.svelte';
  import Chat from '$lib/chat/Chat.svelte';
  import About from '$lib/about/About.svelte';
  import Composer from '$lib/composer/Composer.svelte';

  export let data: PageData;

  let main: HTMLElement;
  let scroll_percent: number = 0;

  const handleScroll = () => {
    scroll_percent = main.scrollLeft / main.scrollWidth;
  };

  const handleHomeClick = () => {
    main.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  };

  const handleAboutClick = () => {
    main.scrollTo({
      left: main.scrollWidth,
      behavior: 'smooth'
    });
  };

  onMount(handleScroll);
</script>

<svelte:head>
  <title>MichaelGPT</title>
  <meta name="description" content="Ask my AI work-related questions" />
  <meta property="og:title" content="MichaelGPT" />
  <meta property="og:description" content="Ask my AI work-related questions" />
  <meta property="og:image" content="{data.root}/og-image.png" />
  <meta
    name="viewport"
    content="width=device-width,initial-scale=1,minimum-scale=1"
  />
</svelte:head>

<main data-flex bind:this={main} on:scroll={handleScroll}>
  <Nav
    bind:scroll_percent
    on:homeClick={handleHomeClick}
    on:aboutClick={handleAboutClick}
  />
  <Section>
    <div data-chat-container>
      <Chat />
      <Composer />
    </div>
  </Section>
  <Section>
    <About />
  </Section>
</main>

<style lang="scss">
  main {
    width: 100vw;
    max-width: 640px;
    margin: auto;

    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      opacity: 0;
      display: none;
    }
  }
</style>
