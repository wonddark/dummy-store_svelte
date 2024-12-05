<script lang="ts">
	import type { Product } from '$lib/types/product';
	import { Card } from '$lib/components/ui/card';
	import { CardContent } from '$lib/components/ui/card/index.js';
	import type { Category } from '$lib/types/categories';

	const { data }: { data: { deals: Product[], categories: Category[] } } = $props();
	const { deals, categories } = data;
</script>

<header class="p-4 bg-orange-200 flex justify-between">
	<strong class="text-xl">GoodValue</strong>
	<nav>
		<ul class="flex gap-2 items-center">
			<li>
				<a href="/products" class="px-2.5 py-1 border border-orange-50 rounded-md hover:bg-orange-50 transition-colors duration-300 ease-in-out">Discover</a>
			</li>
			<li>
				<a href="/categories" class="px-2.5 py-1 border border-orange-50 rounded-md hover:bg-orange-50 transition-colors duration-300 ease-in-out">Categories</a>
			</li>
		</ul>
	</nav>
</header>
<section class="flex gap-4 overflow-x-scroll py-3">
	{#each categories as category}
		<a href="/categories/{category.slug}" class="text-nowrap hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out"><Card class="py-2.5 px-4 hover:text-orange-900 transition-colors duration-300 ease-in-out">{category.name}</Card></a>
	{/each}
</section>
<section>
	<div class="flex flex-col gap-4 bg-orange-50 p-4 rounded-lg shadow-md px-4">
		<h5 class="text-2xl font-semibold text-orange-950">Top deals today</h5>
		<div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
			{#each deals as deal}
				<Card>
					<a href="/products/{deal.id}" class="w-full">
					<img src={deal.thumbnail} alt={deal.title} class="w-full">
					</a>
					<CardContent>
						<span class="font-light text-lg">{deal.title}</span>
						<div class="flex flex-col">
							<s><small>${deal.price}</small></s>
							<strong
								class="text-xl">${(deal.price - deal.price * deal.discountPercentage / 100).toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
							<span class="text-gray-400">Save ${(deal.price * deal.discountPercentage / 100).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits:2 })}</span>
							<span>{deal.stock} in stock</span>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
