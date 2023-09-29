<script lang="ts">
  import { onMount } from 'svelte';
  import NavChip from './NavChip.svelte';

  let scroll_percent = 0;

  const handleScroll = () => {
    scroll_percent = window.scrollX / document.body.scrollWidth;
  };

  onMount(handleScroll);
</script>

<svelte:window on:scroll={handleScroll} />

<div data-backdrop>
  <NavChip bind:scroll_percent />
</div>

<style lang="scss">
  div {
    padding: 1rem;
    width: 100%;
    position: fixed;
    z-index: 5;
  }
</style>
