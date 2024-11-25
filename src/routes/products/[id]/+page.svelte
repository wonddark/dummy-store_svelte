<script lang="ts">
	import Review from '$lib/components/review.svelte';
	import { Button } from '$lib/components/ui/button';
	import type { Product } from '$lib/types/product';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import { Skeleton } from '$lib/components/ui/skeleton';

	const { data }: {
		data: { product: Product, categoryName: string }
	} = $props();
	const { product, categoryName } = data;
	const discountedPrice = product.price - (product.price * product.discountPercentage / 100);
	const savings = product.price - discountedPrice;
	let hidden = $state(true);
	const toggleShow = () => {
		hidden = !hidden;
	};
</script>

<div class="flex-1">
	<Skeleton class={`w-full h-full aspect-square ${hidden?'block':'hidden	'}`} />
	<img src={product.images[0]} alt={product.title} onload={toggleShow} class:hidden />
</div>
<div class="flex-[3]">
	<Button variant="link" size="sm" href="/categories/{product.category}" class="p-0">{categoryName}</Button>
	<h5 class="text-lg lg:text-2xl font-semibold">{product.title}</h5>
	<p class="text-neutral-600">{product.description}</p>
	<p>Brand: <strong>{product.brand}</strong></p>
	<div>
		<strong class="{product.discountPercentage ? 'line-through text-neutral-400':''}">${product.price}</strong>
		{#if product.discountPercentage}
			<strong
				class="text-amber-600">${(discountedPrice).toLocaleString(undefined, { maximumFractionDigits: 2 })}</strong>
			<span>Save ${savings.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
		{/if}
	</div>
	<p>{product.warrantyInformation}</p>
	{#if product.availabilityStatus === 'In Stock'}
		<p class="text-green-700">{product.stock} in stock</p>
		<p>{product.shippingInformation}</p>
	{:else if product.availabilityStatus === 'Low Stock'}
		<p class="text-orange-700">Just {product.stock} left in stock</p>
		<p>{product.shippingInformation}</p>
	{:else}
		<p class="text-red-700">Not available right now. New units on the way.</p>
	{/if}
	<p>{product.returnPolicy}</p>
	<Button>Add to cart</Button>
</div>

<div class="w-full">
	<h5 class="font-semibold text-lg lg:text-xl">Reviews</h5>
	<div class="space-y-4">
		{#each product.reviews as review}
			<Review {...review} />
		{/each}
	</div>
</div>