<script lang='ts'>
	import { withMousePosition } from '@helpers/withMousePosition'
	import { withRect } from '@helpers/withRect'
	import { styleToString } from '@helpers/style'
	import { portal } from '@actions/portal'

	export let offset: { x?: number, y?: number } = { x: 0, y: 0 }
	let className: string
	export { className as class }
	export let transformOrigin: 'center' | 'top' | 'bottom' = 'center'

	const { pos, smoothSpeed } = withMousePosition()
	const { ref, rect } = withRect()
</script>

<div
	class={`fixed left-0 top-0 ${className}`}
	style={styleToString({
		translate: `${$pos.x - ($rect?.width ?? 0) / 2 + (offset?.x ?? 0)}px 
				${$pos.y - ($rect?.height ?? 0) / 2 + (offset?.y ?? 0)}px`,
		transformOrigin: `center ${transformOrigin}`,

		transform: `rotate(${-$smoothSpeed.x * 1.5}deg)`,
	})}
	bind:this={$ref}
	use:portal
	aria-hidden
	tabindex='-1'
>
	<slot />
</div>
