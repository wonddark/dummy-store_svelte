<script lang="ts">
	import type { Product } from '$lib/types/product';
	import { Card } from '$lib/components/ui/card';
	import { CardContent } from '$lib/components/ui/card/index.js';
	import type { Category } from '$lib/types/categories';

	const { data }: {
		data: { deals: Product[], categories: Category[], mobileAccessoriesDeals: Product[], laptopDeals: Product[], groceries: Product[], fashion: Product[] }
	} = $props();
	const { deals, categories, mobileAccessoriesDeals, laptopDeals, groceries, fashion } = data;
</script>

<header class="p-4 bg-orange-200 flex justify-between">
	<strong class="text-xl bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text"><span class="text-transparent">GoodValue</span></strong>
	<nav>
		<ul class="flex gap-2 items-center">
			<li>
				<a href="/products"
					 class="px-2.5 py-1 border border-orange-50 rounded-md hover:bg-orange-50 transition-colors duration-300 ease-in-out">Discover</a>
			</li>
			<li>
				<a href="/categories"
					 class="px-2.5 py-1 border border-orange-50 rounded-md hover:bg-orange-50 transition-colors duration-300 ease-in-out">Categories</a>
			</li>
		</ul>
	</nav>
</header>
<section class="flex gap-4 overflow-x-scroll py-3 px-4">
	{#each categories as category}
		<a href="/categories/{category.slug}"
			 class="text-nowrap hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
			<Card class="py-2.5 px-4 hover:text-orange-900 transition-colors duration-300 ease-in-out">{category.name}</Card>
		</a>
	{/each}
</section>
<section class="my-3.5 px-4">
	<div class="flex flex-col gap-4 bg-orange-200 p-4 rounded-lg shadow-md">
		<h5 class="text-3xl font-semibold text-orange-900 text-center uppercase">Top deals today</h5>
		<div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
			{#each deals as deal}
				<Card class="bg-transparent border-none text-orange-900">
					<CardContent>
						<a href="/products/{deal.id}" class="w-full aspect-square block">
							<img src={deal.thumbnail} alt={deal.title} class="w-full rounded-t-md">
						</a>
						<span class="font-light text-lg">{deal.title}</span>
						<div class="flex flex-col">
							<s><small>${deal.price}</small></s>
							<strong
								class="text-xl">${(deal.price - deal.price * deal.discountPercentage / 100).toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
							<span
								class="text-gray-400">Save ${(deal.price * deal.discountPercentage / 100).toLocaleString(undefined, {
								maximumFractionDigits: 2,
								minimumFractionDigits: 2
							})}</span>
							<span>{deal.stock} in stock</span>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
<section class="my-3.5 px-4">
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
		<div class="flex flex-col gap-4 bg-green-300 p-4 rounded-lg">
			<h6 class="text-xl font-semibold text-green-900 text-center uppercase">Top smartphone deals</h6>
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-3.5 h-full">
				{#each mobileAccessoriesDeals as deal}
					<Card class="bg-transparent border-none text-green-950">
						<CardContent>
							<a href="/products/{deal.id}" class="w-full aspect-square block p-2.5">
								<img src={deal.thumbnail} alt={deal.title} class="w-full rounded-t-md">
							</a>
							<span class="font-light text-lg">{deal.title}</span>
							<div class="flex flex-col">
								<s><small>${deal.price}</small></s>
								<strong
									class="text-xl">${(deal.price - deal.price * deal.discountPercentage / 100).toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
								<span
									class="text-gray-400">Save ${(deal.price * deal.discountPercentage / 100).toLocaleString(undefined, {
									maximumFractionDigits: 2,
									minimumFractionDigits: 2
								})}</span>
								<span>{deal.stock} in stock</span>
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
		<div class="flex flex-col gap-4 bg-blue-300 p-4 rounded-lg shadow-md">
			<h6 class="text-xl font-semibold text-blue-900 text-center uppercase">Top laptop deals</h6>
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-3.5 h-full">
				{#each laptopDeals as deal}
					<Card class="bg-transparent border-none text-blue-900">
						<CardContent>
							<a href="/products/{deal.id}" class="w-full aspect-square block p-2.5">
								<img src={deal.thumbnail} alt={deal.title} class="w-full rounded-t-md">
							</a>
							<span class="font-light text-lg">{deal.title}</span>
							<div class="flex flex-col">
								<s><small>${deal.price}</small></s>
								<strong
									class="text-xl">${(deal.price - deal.price * deal.discountPercentage / 100).toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
								<span
									class="text-gray-400">Save ${(deal.price * deal.discountPercentage / 100).toLocaleString(undefined, {
									maximumFractionDigits: 2,
									minimumFractionDigits: 2
								})}</span>
								<span>{deal.stock} in stock</span>
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	</div>
</section>
<section class="my-3.5 px-4">
	<div class="flex flex-col gap-4 bg-red-300 p-4 rounded-lg">
		<h6 class="text-xl font-semibold text-green-900 text-center uppercase">Groceries deals</h6>
		<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3.5 h-full">
			{#each groceries as deal}
				<Card class="bg-transparent border-none text-orange-900">
					<CardContent>
						<a href="/products/{deal.id}" class="w-full aspect-square block">
							<img src={deal.thumbnail} alt={deal.title} class="w-full rounded-t-md">
						</a>
						<span class="font-light text-lg">{deal.title}</span>
						<div class="flex flex-col">
							<s><small>${deal.price}</small></s>
							<strong
								class="text-xl">${(deal.price - deal.price * deal.discountPercentage / 100).toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
							<span
								class="text-gray-400">Save ${(deal.price * deal.discountPercentage / 100).toLocaleString(undefined, {
								maximumFractionDigits: 2,
								minimumFractionDigits: 2
							})}</span>
							<span>{deal.stock} in stock</span>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
<section class="my-3.5 px-4">
	<div class="grid grid-cols-1 gap-3.5">
		<div class="flex flex-col gap-4 bg-fuchsia-300 p-4 rounded-lg">
			<h6 class="text-xl font-semibold text-green-900 text-center uppercase">Fashion deals</h6>
			<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3.5 h-full">
				{#each fashion as deal}
					<Card class="bg-transparent border-none text-orange-900">
						<CardContent>
							<a href="/products/{deal.id}" class="w-full aspect-square block">
								<img src={deal.thumbnail} alt={deal.title} class="w-full rounded-t-md">
							</a>
							<span class="font-light text-lg">{deal.title}</span>
							<div class="flex flex-col">
								<s><small>${deal.price}</small></s>
								<strong
									class="text-xl">${(deal.price - deal.price * deal.discountPercentage / 100).toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
								<span
									class="text-gray-400">Save ${(deal.price * deal.discountPercentage / 100).toLocaleString(undefined, {
									maximumFractionDigits: 2,
									minimumFractionDigits: 2
								})}</span>
								<span>{deal.stock} in stock</span>
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>
		</div>
	</div>
</section>
