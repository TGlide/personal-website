import { writable } from 'svelte/store'
import { withEffect } from './withEffect'

export function withRect<T extends Element>() {
	const ref = writable<T | null>(null)
	const rect = writable<DOMRect | null>(null)

	withEffect(ref, ($ref) => {
		if (!$ref) return

		function set() {
			if (!$ref) return
			rect.set($ref?.getBoundingClientRect())
		}

		set()

		window.addEventListener('resize', set)
		window.addEventListener('scroll', set, true)

		return () => {
			window.removeEventListener('resize', set)
			window.removeEventListener('scroll', set, true)
		}
	})

	return { ref, rect }
}
