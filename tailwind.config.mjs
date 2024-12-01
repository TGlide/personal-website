import typography from '@tailwindcss/typography'
import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
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
				serif: ['GT Super Display', 'serif'],

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
			transitionTimingFunction: {
				'in-quad': 'cubic-bezier(.55, .085, .68, .53)',
				'in-cubic': 'cubic-bezier(.550, .055, .675, .19)',
				'in-quart': 'cubic-bezier(.895, .03, .685, .22)',
				'in-quint': 'cubic-bezier(.755, .05, .855, .06)',
				'in-expo': 'cubic-bezier(.95, .05, .795, .035)',
				'in-circ': 'cubic-bezier(.6, .04, .98, .335)',
				'out-quad': 'cubic-bezier(.25, .46, .45, .94)',
				'out-cubic': 'cubic-bezier(.215, .61, .355, 1)',
				'out-quart': 'cubic-bezier(.165, .84, .44, 1)',
				'out-quint': 'cubic-bezier(.23, 1, .32, 1)',
				'out-expo': 'cubic-bezier(.19, 1, .22, 1)',
				'out-circ': 'cubic-bezier(.075, .82, .165, 1)',
				'in-out-quad': 'cubic-bezier(.455, .03, .515, .955)',
				'in-out-cubic': 'cubic-bezier(.645, .045, .355, 1)',
				'in-out-quart': 'cubic-bezier(.77, 0, .175, 1)',
				'in-out-quint': 'cubic-bezier(.86, 0, .07, 1)',
				'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
				'in-out-circ': 'cubic-bezier(.785, .135, .15, .86)',
			},
		},
	},
	plugins: [
		typography,
		animate,
	],
}
