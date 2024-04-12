import type { Stores, StoresValues } from 'svelte/store'
import { derived } from 'svelte/store'

import { onDestroy, onMount } from 'svelte'

function noop() {}

function safeOnDestroy(fn: (...args: unknown[]) => unknown) {
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
 *
 * @template S - The type of the stores object
 * @param stores - The stores object to derive from
 * @param fn - The function to run when the stores change
 * @returns A function that can be used to unsubscribe the effect
 */
export function withEffect<S extends Stores>(
	stores: S,
	fn: (values: StoresValues<S>) => (() => void) | void,
): () => void {
	let cb: (() => void) | void

	// Create a derived store that contains the stores object and an onUnsubscribe function
	const destroy = derived(stores, (stores) => {
		cb?.()
		cb = fn(stores)
	}).subscribe(noop)

	const unsub = () => {
		destroy()
		cb?.()
	}

	// Automatically unsubscribe the effect when the component is destroyed
	safeOnDestroy(unsub)
	return unsub
}
