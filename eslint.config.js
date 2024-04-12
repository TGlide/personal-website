// eslint.config.js
import config from '@antfu/eslint-config'

export default config({
	astro: true,
	svelte: true,
	stylistic: {
		indent: 'tab',
		overrides: {
			'max-len': ['error', { code: 120 }],
			'antfu/if-newline': 'off',
		},
	},
})
