<script lang='ts'>
	export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
	export let text = ''
	export let initialDelay = 0
	export let delay = 0.1
	let className = ''
	export { className as class }

	const letters = text.split('')

	function getDelays() {
		let accumulatedDelay = initialDelay

		return letters.map((letter) => {
			if (letter === ' ') return 0
			accumulatedDelay += delay
			return accumulatedDelay
		})
	}

	const delays = getDelays()
</script>

<svelte:element this={tag} class={className}>
	{#each letters as letter, index (`${letter}-${index}`)}
		<span class='inline-block' style='opacity: 0; animation-delay: {delays[index]}s'>
			{letter.trim() || '\u00A0'}
		</span>
	{/each}
</svelte:element>

<style>
	@keyframes enter {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}

	}

	span {
		display: inline-block;
		animation: enter 0.3s cubic-bezier(0.34, 1.6, 0.64, 1) forwards;
	}
</style>
