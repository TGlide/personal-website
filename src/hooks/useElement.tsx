import { useRef, useState } from 'react'

export function useElement() {
	const el = useRef<Element>(null)
	const [rect, setRect] = useState<ReturnType<Element['getBoundingClientRect']> | null>(null)
	const [isHovering, setIsHovering] = useState()

	return {
		ref: el,
		rect,
	}
}
