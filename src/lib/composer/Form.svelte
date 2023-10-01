<script lang="ts">
  import { sendMessage } from '$lib/stores/Chat';
  import { scrollToBottom } from '$lib/util/scroll_helper';

  let question: string;

  const handleSubmit = () => {
    sendMessage(question);
    question = '';
    scrollToBottom();
  };
</script>

<form data-flex data-gap="sm" on:submit|preventDefault={handleSubmit}>
  <input
    type="text"
    name="q"
    minlength="1"
    placeholder="Ask me a work question…"
    autocomplete="off"
    bind:value={question}
  />
  <button type="submit">
    <img src="/icon-return.svg" alt="" />
    <span data-vh>Submit</span>
  </button>
</form>

<style lang="scss">
  form {
    padding: 0 1rem;
  }

  input,
  button {
    height: 42px;
  }

  input {
    flex-grow: 1;

    padding: 0 12px;
    border: 1px solid var(--light-gray);
    border-radius: 21px;
    font-size: 1rem;
  }

  button {
    width: 42px;
    border: 1px solid var(--pink);
    border-radius: 50%;
    background-color: var(--pink);
    position: relative;

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
