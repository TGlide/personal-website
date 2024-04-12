import { writable } from 'svelte/store'
import { onMount } from 'svelte'
import { withRaf } from './withRaf'

export function withMousePosition() {
	const pos = writable({ x: 0, y: 0 })
	const speed = writable({ x: 0, y: 0 })
	const smoothSpeed = writable({ x: 0, y: 0 })

	onMount(() => {
		const mouseMoveHandler = (e: MouseEvent) => {
			pos.update((prevPos) => {
				speed.update(prev => ({
					x: prev.x + (e.clientX - prevPos.x),
					y: prev.y + (e.clientY - prevPos.y),
				}))

				return {
					x: e.clientX,
					y: e.clientY,
				}
			})
		}

		document.addEventListener('mousemove', mouseMoveHandler)

		return () => {
			document.removeEventListener('mousemove', mouseMoveHandler)
		}
	})

	withRaf(() => {
		speed.update((prev) => {
			const newSpeed = {
				x: prev.x * 0.5,
				y: prev.y * 0.5,
			}

			smoothSpeed.update(p => ({
				x: p.x + (newSpeed.x - p.x) * 0.125,
				y: p.y + (newSpeed.y - p.y) * 0.125,
			}))

			return newSpeed
		})
	})

	return { pos, speed, smoothSpeed }
}
