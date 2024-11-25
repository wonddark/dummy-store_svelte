<script lang="ts">
	import { Root, CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import type { Product } from '$lib/types/product';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import StarRating from './star-rating/star-rating.client.svelte';

	const { product }: { product: Product } = $props();
	let hidden = $state(true);
	const toggleShow = () => {
		hidden = !hidden;
	};
	const disccountedPrice = product.price - product.price * product.discountPercentage/100
</script>

<Root class="flex flex-col">
	<CardContent class="flex-1">
		<a href="/products/{product.id}">
			<Skeleton class={`w-full h-full aspect-square ${hidden ? 'block':'hidden	'}`} />
			<img src={product.thumbnail} alt={product.title} onload={toggleShow} class:hidden>
		</a>
		{#if product.discountPercentage}
			<div class="space-x-2 mt-2">
				<strong class="p-1 bg-red-700 text-white text-xs">{product.discountPercentage}% off</strong>
				<strong class="text-red-700 text-xs">Today deal</strong>
			</div>
		{/if}
		<p class="mt-2">{product.title}</p>
		<StarRating rating={product.rating} />
		<p class="text-lg lg:text-2xl relative w-fit">
			<span class="absolute top-1 left-0 text-xs">USD</span>
			<span class="ms-7 me-3.5">{(disccountedPrice).toLocaleString(undefined, {maximumFractionDigits:0, roundingMode:'trunc'})}</span>
			<span class="absolute top-1 right-0 text-xs">{disccountedPrice.toLocaleString(undefined, {maximumFractionDigits:2}).split('.')[1]}</span>
		</p>
		{#if product.discountPercentage}
			<p class="font-light text-sm text-neutral-700">List price: <s>USD {product.price}</s> ({product.discountPercentage}% off)</p>
		{/if}
		<p class="text-sm font-semibold mt-2">{product.shippingInformation}</p>
		<Button href="/products/{product.id}" class="w-full mt-4">View details</Button>
	</CardContent>
</Root>