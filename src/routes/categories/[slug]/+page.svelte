<script lang="ts">
	import ProductCard from '$lib/components/product-card.svelte';
	import type { Product } from '$lib/types/product';

	const { data }: { data: { data: { products: Product[] }, categoryName:string } } = $props();
	const { data: { products }, categoryName } = data;
</script>

<h2 class="text-lg lg:text-2xl font-medium mb-4">Products ({categoryName})</h2>
<div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 p-4">
	{#each products as product}
		<ProductCard product={product} />
	{/each}
</div>