<script lang="ts">
  import { saveAnswer, type ChatMessage, messageError } from '$lib/stores/Chat';
  import { quartInOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import { concurrent } from 'svelte-typewriter';
  import { z } from 'zod';

  export let message: ChatMessage;

  const loadAnswer = async () => {
    const req = await fetch('/chat', {
      method: 'POST',
      body: JSON.stringify({ q: message.question })
    });

    const data = await req.json();
    const valid = z
      .object({
        success: z.boolean(),
        a: z.string().optional()
      })
      .safeParse(data);

    if (valid.success && valid.data.success === true && valid.data.a) {
      saveAnswer(message.id, valid.data.a);
    } else {
      messageError(message.id);
    }
  };
</script>

<li class="user" in:fly={{ y: 10, easing: quartInOut, duration: 100 }}>
  {message.question}
</li>
{#await loadAnswer()}
  <li class="system loading">
    <i aria-hidden="true" />
    <i aria-hidden="true" />
    <i aria-hidden="true" />
    <span data-vh>Loading…</span>
  </li>
{:then}
  {#if message.status === 'loaded'}
    <li class="system" use:concurrent={{ duration: 750 }}>
      {message.answer}
    </li>
  {:else}
    <li class="system">
      <em>Something went wrong!</em>
    </li>
  {/if}
{:catch}
  <li class="system">
    <em>Something went wrong!</em>
  </li>
{/await}

<style lang="scss">
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }

    33% {
      transform: translateY(-8px);
    }

    66% {
      transform: translateY(4px);
    }

    100% {
      transform: translateY(0);
    }
  }

  li {
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    max-width: 260px;

    @media (min-width: 640px) {
      &.system {
        max-width: 420px;
      }
    }
  }

  .user {
    align-self: flex-end;

    background: var(--pink);
    color: #fff;
  }

  .system {
    align-self: flex-start;
    background: #f5f5f5;
  }

  .loading {
    height: 36px;

    i {
      content: '';
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 6px;
      background: var(--pink);
      animation: bounce 1s ease-in-out infinite;

      &:nth-child(2) {
        animation-delay: 0.05s;
      }

      &:nth-child(3) {
        animation-delay: 0.1s;
      }
    }
  }
</style>
