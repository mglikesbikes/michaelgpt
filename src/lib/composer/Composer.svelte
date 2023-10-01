<script lang="ts">
  import Suggestions from './Suggestions.svelte';
  import Form from './Form.svelte';
</script>

<div data-backdrop data-flex="v jc" data-gap data-composer>
  <Suggestions />
  <Form />
</div>

<style lang="scss">
  div {
    margin: 1rem 0;
    padding: 1rem 0;
    width: 100%;
    border: 0 none;

    @media (min-width: 640px) {
      border: 1px solid var(--light-gray);
      border-radius: 0.5rem;

      max-width: 640px;
      margin-bottom: 1rem;
    }
  }
</style>
