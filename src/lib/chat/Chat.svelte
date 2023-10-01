<script lang="ts">
  import { ChatStore } from '$lib/stores/Chat';
  import ChatMessage from './ChatMessage.svelte';
  import NoMessages from './NoMessages.svelte';
</script>

<ul data-flex="v" data-gap="sm" aria-live="assertive">
  <NoMessages />
  {#each $ChatStore as message}
    <ChatMessage {message} />
  {/each}
</ul>

<style lang="scss">
  ul {
    padding: 0 1rem;
  }
</style>
