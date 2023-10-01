<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import AboutIcon from '$lib/icons/AboutIcon.svelte';
  import MichaelGptIcon from '$lib/icons/MichaelGPTIcon.svelte';

  export let scroll_percent: number;

  const dispatch = createEventDispatcher();

  const handleChatClick = () => {
    dispatch('homeClick');
  };

  const handleAboutClick = () => {
    dispatch('aboutClick');
  };
</script>

<nav data-flex style="--scroll-percent: {scroll_percent * 100 * 2}%;">
  <button
    data-flex="ac jc"
    data-gap="sm"
    class:active={scroll_percent <= 0.25}
    on:click={handleChatClick}
  >
    <MichaelGptIcon filled={scroll_percent <= 0.25} />
    Chat
  </button>
  <button
    data-flex="ac jc"
    data-gap="sm"
    class:active={scroll_percent > 0.25}
    on:click={handleAboutClick}
  >
    <AboutIcon filled={scroll_percent >= 0.25} />
    About
  </button>
</nav>

<style lang="scss">
  nav {
    width: 280px;
    margin: auto;
    background-color: #efefef;
    border-radius: 8px;

    &:after {
      content: '';
      width: 140px;
      height: 52px;
      position: absolute;
      background-color: #fff;
      z-index: 0;
      border: 2px solid #efefef;
      border-radius: 8px;
      transform: translateX(var(--scroll-percent));
    }
  }

  button {
    appearance: none;
    -webkit-appearance: none;

    width: 140px;
    height: 52px;
    border: 0;
    background-color: transparent;

    font-size: 18px;
    font-family: 'Roboto Slab';
    font-weight: 400;
    color: #000;
    opacity: 0.5;

    transition: opacity 0.1s;

    position: relative;
    z-index: 1;

    &.active {
      font-weight: 700;
      opacity: 1;
    }
  }
</style>
