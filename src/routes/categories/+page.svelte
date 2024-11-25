<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';

	const { data }: { data: { categories: Record<string, string>[] } } = $props();
	const { categories } = data;
</script>


<h2 class="text-lg lg:text-2xl font-medium mb-4">Categories</h2>
<div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
	{#each categories as category}
		<Button href="/categories/{category.slug}" variant="link" class="justify-start">{category.name}</Button>
	{/each}
</div>