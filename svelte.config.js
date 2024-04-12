import {preprocessMeltUI, sequence} from "@melt-ui/pp";
import {vitePreprocess} from '@astrojs/svelte';
export default {
  preprocess: sequence([vitePreprocess(), preprocessMeltUI()])
};
