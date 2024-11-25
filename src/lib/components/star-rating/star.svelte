<script>
	const { filled, starId } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 51 48" class="star">
	<path data-starid={starId} class={filled ? 'fill-slate-800' : 'fill-neutral-300'}
				d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
</svg>