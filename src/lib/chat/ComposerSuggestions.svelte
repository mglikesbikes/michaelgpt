<script lang="ts">
  const suggestions = [
    `Tell me about yourself and how you work.`,
    `How does your skillset affect the rest of your team and company?`,
    `What are your main motivations when it comes to work?`
  ];
</script>

<div class="suggestions" data-flex="v" data-gap="sm">
  <p>Get inspired:</p>
  <ul data-flex data-gap="sm">
    {#each suggestions as suggestion}
      <li>
        <button>{suggestion}</button>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  p {
    color: #acacac;
    font-size: 14px;
  }

  ul {
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  p,
  ul {
    padding: 0 1rem;
  }

  li {
    flex-shrink: 0;
  }

  button {
    padding: 8px;
    max-width: 250px;
    font-size: 14px;
    font-weight: bold;
    background-color: #370520;
    color: #fff;
    border-radius: 8px;
    border: 0 none;
    text-align: left;
  }
</style>
