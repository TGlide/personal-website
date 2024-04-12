import { useEffect, useState } from 'react'
import { usePrevious } from './usePrevious'
import { useRaf } from './useRaf'

export function useMousePosition() {
	const [pos, setPos] = useState({
		x: 0,
		y: 0,
	})
	const [speed, setSpeed] = useState({ x: 0, y: 0 })

	useEffect(() => {
		function handleMouseMove(e: MouseEvent) {
			setSpeed(prev => ({
				x: prev.x + e.movementX,
				y: prev.y + e.movementY,
			}))

			setPos({
				x: e.clientX,
				y: e.clientY,
			})
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	useRaf((elapsed) => {
		setSpeed(prev => ({
			x: prev.x * 0.03 * elapsed,
			y: prev.y * 0.03 * elapsed,
		}))
	})

	return { pos, speed }
}
