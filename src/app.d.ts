/// <reference types="@cloudflare/workers-types"/>

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    interface Platform {
      context?: ExecutionContext;
      env: {
        IS_DEV: string;
        DATASET: KVNamespace;
        AI: import('@cloudflare/ai').Ai;
        DATASET_VECTORS: VectorizeIndex;
      };
    }
  }
}

export {};
