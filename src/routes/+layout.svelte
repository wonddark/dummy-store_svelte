<script lang="ts">
	import '../app.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>GoodValue</title>
	<meta name="description" content="Project built with SvelteKit + Vite + Typescript + TailwindCSS" />
</svelte:head>

{@render children()}