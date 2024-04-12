export function withRaf(callback: (FrameRequestCallback)) {
	let rafId: number

	function loop(t: number) {
		callback(t)
		rafId = requestAnimationFrame(loop)
	}

	rafId = requestAnimationFrame(loop)

	return {
		destroy() {
			cancelAnimationFrame(rafId)
		},
	}
}
