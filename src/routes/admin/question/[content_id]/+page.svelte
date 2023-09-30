<script lang="ts">
  import QuestionForm from '$lib/admin/QuestionForm.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Edit question</title>
</svelte:head>

<header data-flex="sb ac">
  <h1 data-header>Edit question</h1>
  <a href="/admin" data-btn>Cancel</a>
</header>

<QuestionForm question={data.question} answer={data.answer} is_editing />
