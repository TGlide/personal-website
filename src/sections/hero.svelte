<script lang='ts'>
	import AnimatedText from '@components/animated-text.svelte'
	import { onMount } from 'svelte'

	let disableAnim = false
	onMount(() => {
		// if query param has disableAnim=true
		const urlParams = new URLSearchParams(window.location.search)
		disableAnim = urlParams.get('disable-anim') !== null
	})
</script>

<header
	class='relative mx-auto flex max-w-[655px] flex-col justify-end px-4 pt-32 font-serif
		xl:container xl:h-[800px] xl:pt-0'
>
	{#if disableAnim}
		<h1 class='text-6xl font-black xl:text-[15rem]'>Hi.</h1>
		<h2 class='mt-4 text-5xl font-black xl:text-[13rem]'>I'm Thomas.</h2>
	{:else}
		<AnimatedText class='text-6xl font-black xl:text-[15rem]' text='Hi.' tag='h1' />
		<AnimatedText
			text="I'm Thomas."
			tag='h2'
			initialDelay={1}
			delay={0.065}
			class='mt-4 text-5xl font-black xl:text-[13rem]'
		/>
	{/if}

	<div
		class='avatar absolute right-8 top-8 w-[120px] overflow-hidden rounded-xl sm:w-[200px]
			xl:right-[200px] xl:top-[180px] xl:w-[360px]'
		data-disable-anim={disableAnim ? '' : undefined}
	>
		<slot />
		<!-- {/* Overlay vignette */} -->
		<div
			class='absolute left-0 top-0 size-full
				bg-[radial-gradient(ellipse_closest-side,_rgba(0,0,0,0.0),_rgba(0,0,0,0.15))]'
		/>
	</div>
</header>

<style>
	@keyframes avatar-animate {
		0% {
			clip-path: inset(50% 50% 50% 50% round 200px);
			rotate: 8deg;
		}
		100% {
			clip-path: inset(0% 0% 0% 0% round 200px);
			rotate: -2deg;
		}
	}

	.avatar {
		clip-path: inset(50% 50% 50% 50% round 200px);
		rotate: 8deg;
		animation: avatar-animate 0.7s 2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}

	.avatar[data-disable-anim] {
		animation-duration: 0s !important;
		animation-delay: 0s !important;
	}
</style>
