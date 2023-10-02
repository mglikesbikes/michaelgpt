<script lang="ts">
  import MichaelGptIcon from '$lib/icons/MichaelGPTIcon.svelte';
  import { ChatStore } from '$lib/stores/Chat';
</script>

<li data-flex="ac jc" class:empty={$ChatStore.length === 0}>
  <h1 data-header data-flex data-gap="sm">
    <MichaelGptIcon filled large /> MichaelGPT
  </h1>
</li>

<style lang="scss">
  li {
    height: 110px;
    transition: height 750ms ease-in-out;

    &.empty {
      height: calc(
        100vh - var(--nav-height) * 2 - var(--composer-height) - 2rem
      );
    }
  }

  h1 {
    font-size: 1.5rem;
  }
</style>
