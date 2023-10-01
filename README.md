# [<span style="background:#fff;border-radius:4px;padding:.5rem;vertical-align:middle;color:#000;text-decoration:underline"><img src="static/icon-michaelgpt.svg" width="42" height="42" align="center"/>MichaelGPT <small>↗</small></span>](https://michaelgpt.pocketrides.workers.dev/) • Ask my AI work-related questions ✨

## **Ask my AI work-related questions ✨**

Runs on Cloudflare [Workers AI](https://developers.cloudflare.com/workers-ai/tutorials/build-a-retrieval-augmented-generation-ai/) and [Vectorize](https://developers.cloudflare.com/vectorize/). Be sure to check out the [Figma prototype](https://www.figma.com/proto/SEYbpEiyZsT6V3XsGH9F04/MichaelGPT) and [architecture diagram](https://www.figma.com/file/KsNtdYQF0H8tCEDnhl5ANm/MichaelGPT---Architecture).

## Environment setup

First step, `npm install`.

> #### ℹ️ Getting an error?
>
> `SyntaxError: Named export 'Ai' not found.`  
> **How to resolve:** The Cloudflare AI library shipped in CommonJS format.
>
> #### Step 1:
>
> Open `node_modules/@cloudflare/ai/dist` and add `.js` to the ends of the imports, **in all files.**
>
> ##### Before (`ai.js`):
>
> ```
> import { Tensor, TensorType } from "./tensor";
> import { InferenceSession } from "./session";
> import { resnetLabels } from "./labels";
> ```
>
> ##### After (repeat this for all files):
>
> ```
> import { Tensor, TensorType } from "./tensor.js";
> import { InferenceSession } from "./session.js";
> import { resnetLabels } from "./labels.js";
> ```
>
> #### Step 2:
>
> Add `"type":"module"` to `node_modules/@cloudflare/ai/package.json`

There are 4 scripts to be aware of:

- `1-watch-remote`: watch script that builds the sveltekit app
- `2-dev-remote`: because Cloudflare's AI features are remote-only at this time, we need to run our dev server in "remote" mode, which takes the built output from step 1 and uploads it to a preview environment. We use `.dev.vars` to tell us if we are in that preview mode or not, to protect our `/admin` route
- `3-deploy`: deploys the built app to your subdomain, e.g. `<worker name>.<account name>.workers.dev`
- `4-debug`: starts a logging session for the remote server (during dev, you see all debug logs in terminal like normal).

You will need a Cloudflare account ID to run this locally and deploy it; retrieve it from the Cloudflare Dash, copy `wrangler.toml.example` to `wrangler.toml`. Give your worker a name, in the `name=""` field, and add your account ID to `account_id=""`. Then, follow the rest of the setup instructions below:

### Create the KV store to hold questions and answers.

```
  $ npx wrangler@latest kv:namespace create DATASET
```

This command returns an ID, add it to your `wrangler.toml` and use the same ID for `id` and `preview_id`.

### Create the Vectorize index to hold embeddings

```
$ npx wrangler@latest vectorize create dataset-vectors --dimensions=1536 --metric=cosine
```

Note: the binding in `wrangler.toml` is `DATASET_VECTORS` to align its domain with the KV store. (See: `app.d.ts` for full bindings.)
