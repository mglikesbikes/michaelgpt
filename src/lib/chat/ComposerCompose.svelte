<script lang="ts"></script>

<div data-flex data-gap="sm">
  <label for="composer-compose" data-vh>Ask me a work question:</label>
  <input
    id="composer-compose"
    type="text"
    placeholder="Ask me a work question…"
  />
  <button type="submit">
    <img src="/icon-return.svg" alt="" />
    <span data-vh>Submit</span>
  </button>
</div>

<style lang="scss">
  div {
    padding: 0 1rem;
  }

  input,
  button {
    height: 2rem;
    font-size: 1rem;
  }

  input {
    border: 1px solid #acacac;
    border-radius: 1rem;
    flex-grow: 1;
  }

  button {
    width: 2rem;
    position: relative;
    background-color: #f2107d;
    border: 1px solid #f2107d;
    border-radius: 50%;

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
