export function safeWindow(): EventTarget {
	return typeof window !== 'undefined'
		? window
		: {
				addEventListener: () => {},
				removeEventListener: () => {},
				dispatchEvent: () => false,
			}
}
