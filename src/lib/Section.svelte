<section>
  <slot />
</section>

<style lang="scss">
  section {
    scroll-snap-align: start;
    scroll-snap-stop: always;

    width: 100%;
    flex-shrink: 0;

    padding-top: var(--nav-height);
  }
</style>
