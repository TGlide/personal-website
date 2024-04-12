export function withRaf(callback: FrameRequestCallback, fps: number = 60) {
	if (typeof window === 'undefined') return

	let rafId: number
	let then = performance.now()
	const interval = 1000 / fps
	let delta: number

	function loop(now: number) {
		rafId = requestAnimationFrame(loop)
		delta = now - then

		if (delta >= interval) {
			then = now - (delta % interval)
			callback(delta)
		}
	}

	rafId = requestAnimationFrame(loop)

	return {
		destroy() {
			cancelAnimationFrame(rafId)
		},
	}
}
