<!--
  For this project, it's a one-page app that swipes between two "pages"

  We'll encapsulate the main area of the page and the navigation chip
  into its own component
 -->

<script lang="ts">
  import NavChip from './NavChip.svelte';

  let scroll_percent: number = 0;
  let body: HTMLDivElement;

  const handleScroll = (e: Event) => {
    scroll_percent = body.scrollLeft / body.scrollWidth;
  };
</script>

<main>
  <div class="nav">
    <!-- the magic of svelte: instant reactivity with `bind:` directive -->
    <NavChip bind:scroll_percent scroll_container={body} />
  </div>

  <!-- this will be what scrolls -->
  <div class="body" bind:this={body} on:scroll={handleScroll} data-flex>
    <!-- wrap each section, and expose it with a <slot/> -->
    <section>
      <slot name="chat" />
    </section>
    <section>
      <slot name="about" />
    </section>
  </div>
</main>

<style lang="scss">
  main,
  section {
    width: 100vw;
    min-height: 100vh;
    max-width: 640px;
    margin: auto;
  }

  .nav {
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    padding: 1rem 0;
    position: sticky;
    top: 0;
  }

  .body {
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    flex-shrink: 0;
  }
</style>
