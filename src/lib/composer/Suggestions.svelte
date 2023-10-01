<script lang="ts">
  import { sendMessage } from '$lib/stores/Chat';
  import { quartInOut } from 'svelte/easing';
  import { writable } from 'svelte/store';
  import { slide } from 'svelte/transition';

  const suggestions = [
    `Tell me about yourself and how you work.`,
    `How does your skillset affect the rest of your team and company?`,
    `What are your main motivations when it comes to work?`
  ];

  const selected = writable<string[]>([]);

  const handleSelection = (suggestion: string) => {
    sendMessage(suggestion);

    selected.update((prev) => {
      prev.push(suggestion);
      return prev;
    });
  };
</script>

{#if $selected.length < suggestions.length}
  <div
    data-flex="v"
    data-gap="sm"
    out:slide={{ duration: 100, easing: quartInOut }}
  >
    <p>Get inspired:</p>
    <ul data-flex data-gap="sm">
      {#each suggestions as suggestion}
        {#if $selected.indexOf(suggestion) === -1}
          <li>
            <button
              on:click={() => {
                handleSelection(suggestion);
              }}>{suggestion}</button
            >
          </li>
        {/if}
      {/each}
    </ul>
  </div>
{/if}

<style lang="scss">
  p,
  ul {
    padding: 0 1rem;
  }

  p {
    color: var(--light-gray);
    font-size: 14px;
  }

  ul {
    overflow-x: scroll;
    flex-wrap: nowrap;

    &::-webkit-scrollbar {
      opacity: 0;
      display: none;
    }
  }

  li {
    flex-shrink: 0;
  }

  button {
    padding: 8px;
    max-width: 250px;
    font-size: 14px;
    font-weight: bold;
    background-color: var(--dark-pink);
    color: #fff;
    border-radius: 8px;
    border: 0 none;
    text-align: left;
  }
</style>
