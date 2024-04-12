<script lang='ts'>
	import { spring } from 'svelte/motion'

	export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
	export let text = ''
	export let initialDelay = 0
	export let delay = 0.1
	let className = ''
	export { className as class }

	const letters = text.split('')
	let accumulatedDelay = initialDelay

	function animate(node: HTMLElement, letter: string) {
		if (!letter.trim()) return
		accumulatedDelay += delay
		const currDelay = accumulatedDelay

		const y = spring(20, { damping: 0.3, stiffness: 0.1 })
		const opacity = spring(0, { damping: 0.3 })

		const timeout = setTimeout(() => {
			y.set(0)
			opacity.set(1)
		}, currDelay * 1000)

		const unsubs = [
			y.subscribe((value) => {
				node.style.transform = `translateY(${value}px)`
			}),
			opacity.subscribe((value) => {
				node.style.opacity = `${value}`
			}),
		]

		return {
			destroy() {
				unsubs.forEach(unsub => unsub())
				clearTimeout(timeout)
			},
		}
	}
</script>

<svelte:element this={tag} class={className}>
	{#each letters as letter, index (`${letter}-${index}`)}
		<span class='inline-block' style='opacity: 0;' use:animate={letter}>
			{letter.trim() || '\u00A0'}
		</span>
	{/each}
</svelte:element>
