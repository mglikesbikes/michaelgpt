<script lang="ts">
  import NavChip from './NavChip.svelte';

  export let scroll_percent = 0;
</script>

<div data-backdrop data-flex="jc">
  <NavChip bind:scroll_percent on:homeClick on:aboutClick />
</div>

<style lang="scss">
  div {
    position: fixed;
    width: 100vw;
    height: var(--nav-height);
    left: 0;
    top: 0;
    z-index: 5;
  }
</style>
