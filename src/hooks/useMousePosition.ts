import { useEffect, useRef, useState } from 'react'
import { useEventListener } from 'usehooks-ts'
import { usePrevious } from './usePrevious'
import { useRaf } from './useRaf'

export function useMousePosition() {
	const [pos, setPos] = useState({
		x: 0,
		y: 0,
	})
	const [speed, setSpeed] = useState({ x: 0, y: 0 })
	const [smoothSpeed, setSmoothSpeed] = useState({ x: 0, y: 0 })
	const documentRef = useRef(document)

	useEventListener('mousemove', (e: MouseEvent) => {
		setSpeed(prev => ({
			x: prev.x + (e.clientX - pos.x),
			y: prev.y + (e.clientY - pos.y),
		}))

		setPos({
			x: e.clientX,
			y: e.clientY,
		})
	}, documentRef)

	useRaf((elapsed) => {
		setSpeed((prev) => {
			// When one second has passed, the speed should be halved.
			// So in each millisecond, the speed should be multiplied by 1 - 1/1000.
			const MULT_PER_SEC = 1 - 1 / 1000
			const secsElapsed = elapsed / 1000

			const newSpeed = {
				x: prev.x * 0.5,
				y: prev.y * 0.5,
			}

			setSmoothSpeed(p => ({
				x: p.x + (newSpeed.x - p.x) * 0.25,
				y: p.y + (newSpeed.y - p.y) * 0.25,
			}))

			return newSpeed
		})
	})

	return { pos, speed, smoothSpeed }
}
