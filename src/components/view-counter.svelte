<script lang='ts'>
	import { pluralize } from '@helpers/string'
  import { onMount } from 'svelte';

	export let slug: string | undefined

	let views = 0;

	async function getViews() {
		const res = await fetch(`/api/views/${slug}`, {
			method: 'GET',
		
		})
		return await res.json()
	}

	onMount(() => {
		getViews().then((res) => {
			views = res.views
		})
	})
</script>

<p class='mt-2 text-xs opacity-75'>{views} {pluralize('view', views)}</p>
