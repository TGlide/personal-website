import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import svelte from '@astrojs/svelte'
import markdoc from '@astrojs/markdoc'
import Icons from 'unplugin-icons/vite'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), svelte(), markdoc(), mdx()],
	vite: {
		plugins: [
			Icons({
				compiler: 'astro',
			}),
		],
	},
})
