import preact from '@astrojs/preact';
import svelte from '@astrojs/svelte';

export default {
  integrations: [
    preact(),
    svelte(),
  ],
};
