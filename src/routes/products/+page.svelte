<script>
	import ProductCard from '$lib/components/product-card.svelte';
	import { Root, Content, Item, PrevButton, Ellipsis, NextButton, Link } from '$lib/components/ui/pagination';

	const { data } = $props();
	const { products } = data;
</script>


<div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 p-4">
	{#each products as product}
		<ProductCard product={product} />
	{/each}
</div>

<Root count={100} perPage={10}>
	{#snippet children({ pages, currentPage })}
		<Content>
			<Item>
				<PrevButton />
			</Item>
			{#each pages as page (page.key)}
				{#if page.type === "ellipsis"}
					<Item>
						<Ellipsis />
					</Item>
				{:else}
					<Item>
						<Link {page} isActive={currentPage === page.value}>
							{page.value}
						</Link>
					</Item>
				{/if}
			{/each}
			<Item>
				<NextButton />
			</Item>
		</Content>
	{/snippet}
</Root>