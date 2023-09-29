<script>
  import ComposerCompose from './ComposerCompose.svelte';
  import ComposerSuggestions from './ComposerSuggestions.svelte';
</script>

<form data-flex="v" data-gap data-backdrop>
  <ComposerSuggestions />
  <ComposerCompose />
</form>

<style lang="scss">
  form {
    padding: 1rem 0;
    position: sticky;
    bottom: 0;
  }
</style>
