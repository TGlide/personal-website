/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			keyframes: {
				wave: {
					'0%, 100%': { 'transform': 'rotate(10deg)', 'transform-origin': 'bottom' },
					'50%': { 'transform': 'rotate(-10deg)', 'transform-origin': 'bottom' },
				},
			},
			animation: {
				wave: 'wave 1000ms ease-in-out infinite',
			},
		},
	},
	plugins: [],
}