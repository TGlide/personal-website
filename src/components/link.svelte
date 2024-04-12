<script lang='ts'>
	import { withEventListener } from '@helpers/withEventListener'
	import { safeWindow } from '@helpers/safeWindow'
	import MouseFollower from './mouse-follower.svelte'

	let className: string
	export { className as class }
	export let href: string

	let isHovering = false
	let el: HTMLAnchorElement

	withEventListener(safeWindow(), 'scroll', () => {
		isHovering = false
	})
</script>

<a
	class={className}
	on:mousemove={() => (isHovering = true)}
	on:mouseleave={() => (isHovering = false)}
	on:click={() => (isHovering = false)}
	{href}
	target='_blank'
	bind:this={el}
>
	<slot />
</a>
<MouseFollower
	class='pointer-events-none'
	offset={{ y: -132 }}
	transformOrigin='bottom'
>
	<div
		class='pointer-events-none h-[240px] w-[400px]
			overflow-hidden rounded-xl border  border-neutral-600 bg-neutral-800
			p-1.5 shadow-xl transition-all duration-300
			[&_img]:size-full [&_img]:rounded-lg [&_img]:object-cover'
		style:clip-path={isHovering ? 'inset(0% 0% 0% 0% round 10px)' : 'inset(90% 50% 10% 50% round 10px)'}
		style:transition-duration={isHovering ? '0.25s' : '0.125s'}
		style:transition-delay={isHovering ? '0.05s' : '0s'}

	>
		<slot name='img' classes='' />
	</div>
</MouseFollower>
