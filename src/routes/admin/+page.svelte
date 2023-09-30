<script lang="ts">
  import { writable } from 'svelte/store';
  import type { PageData } from './$types';
  import { z } from 'zod';
  import { slide } from 'svelte/transition';
  import { invalidateAll } from '$app/navigation';

  export let data: PageData;

  // mark this explicitely reactive, since `data` may change
  // (in react, this would be useEffect())
  $: has_pending =
    data.pending_id &&
    data.list.filter((i) => i.id === data.pending_id).length === 0;

  // there is lag in KV operations, so we're going to fake
  // the deletion of items while it flushes through the network.
  // this is a svelte store to track the IDs of items we delete.
  const deleted_ids = writable<string[]>([]);

  const handleDelete = async (e: MouseEvent) => {
    e.preventDefault();

    const target = e.currentTarget as HTMLAnchorElement;

    if (confirm(`Are you sure?`)) {
      const req = await fetch(target.href, {
        method: 'POST'
      });
      const res = await req.json();
      const parsed = z
        .object({
          success: z.boolean(),
          content_id: z.string()
        })
        .safeParse(res);

      if (parsed.success && parsed.data.success === true) {
        // if we have a successful deletion, update the store
        // (you can't just .push() onto a store, sadly)
        deleted_ids.update((prev) => {
          prev.push(parsed.data.content_id);

          return prev;
        });
      } else {
        alert(`Something went wrong, try again.`);
      }
    }
  };
</script>

<header data-flex="sb ac">
  <h1 data-header>All questions</h1>
  <a href="/admin/question/new" data-btn>New</a>
</header>

<ul data-flex="v" data-gap>
  {#each data.list as list_item (list_item.id)}
    {#if $deleted_ids.indexOf(list_item.id) === -1}
      <li in:slide out:slide>
        <div data-flex data-gap="sm">
          <a
            href={`/admin/question/${list_item.id}/destroy`}
            data-btn="secondary"
            on:click={handleDelete}
          >
            Delete
          </a>
          <a href={`/admin/question/${list_item.id}`} data-btn>Edit</a>
        </div>
        <h2 data-header>{list_item.question}</h2>
        <p>{list_item.answer}</p>
      </li>
    {/if}
  {/each}
  {#if has_pending}
    <li out:slide>
      <p>
        Processing latest… <a
          href="#void"
          on:click={async (e) => {
            // this is wholly unneccessary lol,
            // just showing off dynamic reloading
            // (and giving you something to do while waiting for KV)
            e.preventDefault();
            await invalidateAll();
          }}>check now</a
        >.
      </p>
    </li>
  {/if}
</ul>

<style lang="scss">
  li {
    overflow: hidden;
    padding: 1rem;
    border: 1px solid #acacac;
    border-radius: 8px;

    div {
      float: right;
    }
  }
</style>
