<script lang="ts">
  export let hpad: boolean = false;
  export let fullheight: boolean = false;
  export let sticky: boolean = false;
</script>

<section class:sticky>
  <div class:hpad class:fullheight>
    <slot />
  </div>
  <slot name="toolbar" />
</section>

<style lang="scss">
  section {
    scroll-snap-align: start;
    scroll-snap-stop: always;

    width: 100vw;
    flex-shrink: 0;

    // header padding
    padding-top: calc(84px + 1rem);

    &.sticky {
      position: sticky;
      top: 0;
    }

    div {
      max-width: 640px;
      margin: auto;

      &.hpad {
        padding: 0 1.25rem;
      }

      &.fullheight {
        min-height: 100vh;
      }
    }
  }
</style>
