<script lang="ts">
	import Collection from './Collection.svelte'

	const Collections = [
		{
			name: 'dev',
			id: '1',
			items: [
				{
					name: 'GitHub',
					url: 'https://github.com/axerivant'
				},
				{
					name: 'Firebase',
					url: 'https://firebase.google.com'
				},
				{
					name: 'Vercel',
					url: 'https://vercel.com'
				}
			]
		},
		{
			name: 'dev',
			id: '12',
			items: [
				{
					name: 'GitHub',
					url: 'https://github.com/axerivant'
				},
				{
					name: 'Firebase',
					url: 'https://firebase.google.com'
				},
				{
					name: 'Vercel',
					url: 'https://vercel.com'
				}
			]
		},
		{
			name: 'dev',
			id: '13',
			items: [
				{
					name: 'GitHub',
					url: 'https://github.com/axerivant'
				},
				{
					name: 'Firebase',
					url: 'https://firebase.google.com'
				},
				{
					name: 'Vercel',
					url: 'https://vercel.com'
				}
			]
		}
	]

	let currentlyViewingCollectionID
	const setCurrentlyViewingSelectionID = (ev) => {
		currentlyViewingCollectionID = ev.detail
		console.log(ev.detail)
	}
</script>

<div class="absolute bottom-8 flex gap-3 items-end">
	{#each Collections as { name, id, items }}
		<Collection
			{id}
			{name}
			{items}
			on:select={setCurrentlyViewingSelectionID}
			on:clear={() => (currentlyViewingCollectionID = null)}
			{currentlyViewingCollectionID}
		/>
	{/each}
</div>
