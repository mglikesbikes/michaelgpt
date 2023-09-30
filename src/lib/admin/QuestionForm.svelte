<script lang="ts">
  export let question: string = '';
  export let answer: string = '';
  export let is_editing: boolean = false;

  let is_submitting = false;
</script>

<section>
  <form
    data-flex="v"
    data-gap="lg"
    method="POST"
    on:submit={() => {
      is_submitting = true;
    }}
  >
    <fieldset>
      <label for="question">Question:</label>
      <input id="question" name="question" bind:value={question} />
    </fieldset>
    <fieldset>
      <label for="answer">Answer:</label>
      <textarea id="answer" name="answer" bind:value={answer} />
    </fieldset>
    <input
      type="submit"
      data-btn
      value={is_submitting ? 'Saving…' : is_editing ? 'Update' : 'Submit'}
      disabled={is_submitting ? true : undefined}
    />
  </form>
</section>

<style lang="scss">
  input[type='submit'][disabled] {
    opacity: 0.5;
  }
</style>
