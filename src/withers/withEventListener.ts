import { onMount } from 'svelte'

export function withEventListener(
	target: EventTarget,
	type: string,
	listener: EventListener,
	options?: boolean | AddEventListenerOptions,
) {
	onMount(() => {
		target.addEventListener(type, listener, options)

		return () => {
			target.removeEventListener(type, listener, options)
		}
	})
}
