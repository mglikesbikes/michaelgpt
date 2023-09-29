<script lang="ts">
  import '@fontsource/roboto/400.css';
  import '@fontsource/roboto-slab/400.css';
  import '@fontsource/roboto-slab/800.css';
  import '$lib/styles/admin.scss';
</script>

<svelte:head>
  <title>Admin</title>
</svelte:head>

<main>
  <slot />
</main>

<style lang="scss">
  main {
    width: 100vw;
    max-width: 640px;
    margin: auto;
    padding: 1.5rem;
  }
</style>
