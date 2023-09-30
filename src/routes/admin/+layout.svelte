<script lang="ts">
  import '@fontsource/roboto/400.css';
  import '@fontsource/roboto-slab/400.css';
  import '@fontsource/roboto-slab/800.css';
  import '$lib/styles/admin.scss';
</script>

<svelte:head>
  <title>Admin</title>
</svelte:head>

<main data-flex="v" data-gap="lg">
  <slot />
</main>

<style lang="scss">
  main {
    width: 100vw;
    max-width: 640px;
    margin: auto;
    padding: 1.5rem;
  }

  :global(h1) {
    font-size: 1.5rem;
  }

  :global(h2) {
    font-size: 1.125rem;
  }
</style>
