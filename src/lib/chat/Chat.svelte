<script lang="ts">
  import { writable } from 'svelte/store';

  import Section from '$lib/Section.svelte';

  import Composer from './Composer.svelte';
  import NoMessages from './NoMessages.svelte';

  const messages = writable([]);
</script>

<Section fullheight>
  {#if !$messages.length}
    <NoMessages />
  {/if}
  <Composer slot="toolbar" />
</Section>
