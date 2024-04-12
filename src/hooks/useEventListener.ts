import { useEffect } from 'react'

export function useEventLister(
	target: EventTarget,
	type: string,
	handler: EventListener,
	options?: AddEventListenerOptions,
) {
	useEffect(() => {
		target.addEventListener(type, handler, options)

		return () => {
			target.removeEventListener(type, handler, options)
		}
	}, [target, type, handler, options])
}
