<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let name: string
	export let items: any
	export let id
	export let currentlyViewingCollectionID: string

	$: showItems = currentlyViewingCollectionID === id

	const dispatch = createEventDispatcher()
	const emmitSelect = () => {
		dispatch('select', id)
	}
	const emmitClear = () => {
		dispatch('clear', id)
	}
</script>

<div>
	{#if showItems}
		<div
			on:mouseleave={emmitClear}
			class="absolute bottom-6 bg-700 flex flex-col gap-1 p-3 rounded mb-3"
		>
			{#each items as { name, url }}
				<div class="hover:brightness-125 px-1 rounded">
					<a href={url} class="text-200">{name}</a>
				</div>
			{/each}
		</div>
	{/if}
	<div class="text-200 hover:underline" on:mouseenter={emmitSelect}>
		{name}
	</div>
</div>
