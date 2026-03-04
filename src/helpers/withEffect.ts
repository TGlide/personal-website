import { derived, type Readable } from 'svelte/store'
import { onDestroy } from 'svelte'

function noop() {}

function safeOnDestroy(fn: () => void) {
	try {
		onDestroy(fn)
	}
	catch {
		return fn
	}
}

/**
 * A utility function that creates an effect from a set of stores and a function.
 * The effect is automatically cleaned up when the component is destroyed.
 */
export function withEffect<T>(
	stores: Readable<T> | Readable<unknown>[],
	fn: (values: T extends unknown[] ? T : T) => (() => void) | void,
): () => void {
	let cb: (() => void) | void

	// Create a derived store that contains the stores object and an onUnsubscribe function
	const destroy = derived(stores as Readable<unknown>, (values) => {
		cb?.()
		// eslint-disable-next-line ts/no-explicit-any
		cb = fn(values as any)
	}).subscribe(noop)

	const unsub = () => {
		destroy()
		cb?.()
	}

	// Automatically unsubscribe the effect when the component is destroyed
	safeOnDestroy(unsub)
	return unsub
}
