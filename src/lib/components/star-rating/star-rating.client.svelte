<script lang="ts">
	import Star from './star.svelte';

	const { rating } = $props();
	let stars = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 }
	];
</script>

<span class="inline-flex gap-0.5 w-full">
{#each stars as star (star.id)}
	<Star
		filled={rating >= star.id}
		starId={star.id}
	/>
{/each}
</span>
