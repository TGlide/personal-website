import { useEffect } from 'react'

export function useRaf(cb: (elapsed: number) => void) {
	useEffect(() => {
		let raf: number
		let lastTime = performance.now()
		function tick() {
			const now = performance.now()
			const elapsed = now - lastTime
			lastTime = now

			cb(elapsed)
			raf = requestAnimationFrame(tick)
		}
		tick()

		return () => cancelAnimationFrame(raf)
	}, [])
}
