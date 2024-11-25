<script lang="ts">
	import '../app.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>GoodValue</title>
	<meta name="description" content="GoodValue online store" />
</svelte:head>

<div>
	{@render children()}
</div>