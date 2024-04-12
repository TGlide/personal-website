import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import Icons from 'unplugin-icons/vite'

import db from '@astrojs/db'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), svelte(), mdx(), db()],
	vite: {
		plugins: [Icons({
			compiler: 'astro',
		})],
	},
})
