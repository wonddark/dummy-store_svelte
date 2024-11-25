<script>
	const {children} = $props()
</script>

<div class="col-start-1 -col-end-1 flex flex-col lg:flex-row flex-wrap">
	{@render children()}
</div>