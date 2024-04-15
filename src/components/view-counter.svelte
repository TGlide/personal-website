<script lang='ts'>
	import { pluralize } from '@helpers/string'
	import { onMount } from 'svelte'

	export let slug: string | undefined

	let views = 0

	async function getViews() {
		const res = await fetch(`/api/views/${slug}`, {
			method: 'GET',
		})
		return await res.json()
	}

	onMount(async () => {
		getViews().then((res) => {
			views = res.views
		})
	})

	function transform(node: HTMLElement, value: number) {
		async function update(value: number) {
			// await new Promise(resolve => setTimeout(resolve, 1000))
			const childNode = [...node.children].find(
				child => child.innerHTML === String(value),
			)
			if (!childNode) return

			const charWidth = childNode.getBoundingClientRect().width
			node.style.transform = `translateY(-${value * 100}%)`
			node.style.width = `${charWidth}px`
		}

		update(value)

		return { update }
	}

	const blur = (_node: HTMLElement) => {
		return {
			delay: 150,
			duration: 500,
			css: (t: number, u: number) =>
				`filter: blur(${u * 3}px); opacity: ${t * 1}`,
		}
	}
</script>

<div class='mt-2 text-xs opacity-75'>
	{#if views}
		<div class='wrapper' transition:blur>
			{#each views?.toString() as char, index (index)}
				{#if Number.isNaN(Number(char))}
					<span>{char}</span>
				{:else}
					<div class='list' use:transform={Number(char)}>
						<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
						{#each { length: 10 } as _, i}
							<span>{i}</span>
						{/each}
					</div>
				{/if}
			{/each}
		</div>
		<span transition:blur>{pluralize('view', views)}</span>
	{:else}
		<!-- Just to avoid CLS :) -->
		<span aria-hidden class='opacity-0 select-none'>JOHN CEEEEENA</span>
	{/if}
</div>

<style>
  .wrapper {
    display: inline-flex;
    overflow: hidden;
    position: relative;
    padding-block: 10px;
		margin-block: -10px;
  }

  .wrapper::after {
    /* gradient */
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      #171717,
      #171717 27.5%,
      transparent 35%,
      transparent 65%,
      #171717 72.5%,
      #171717
    );
  }

  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 0.75rem;
    line-height: 0.75rem;
    transition:
      transform 1s 0ms ease,
      width 0s;

    list-style: none;
    padding: 0;
  }
</style>
