<script lang="ts">
	import {
		Root, List, Item, Link, Separator, Page
	} from '$lib/components/ui/breadcrumb';

	const { route, data }: { route: string, data: Record<string, string> } = $props();
	const routeSegments = route.split('/').filter(item => item);
	console.log(data);
</script>

<Root>
	<List>
		<Item class="hidden md:block">
			<Link href="/">Home</Link>
		</Item>
		<Separator class="hidden md:block" />
		{#each routeSegments as segment, index}
			{#if index === routeSegments.length - 1}
				<Item>
					<Page>{data?.categoryName ?? `${segment.slice(0, 1).toUpperCase()}${segment.slice(1)}`}</Page>
				</Item>
			{:else}
				<Item class="hidden md:block">
					<Link href="/{segment}">{segment.slice(0, 1).toUpperCase()}{segment.slice(1)}</Link>
				</Item>
				<Separator class="hidden md:block" />
			{/if}
		{/each}
	</List>
</Root>