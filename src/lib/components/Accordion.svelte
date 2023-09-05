<script>
	import { slide } from "svelte/transition";

	export let i = false;
	export let show;
	export let showCollapse;
	export let label;
	export let content;
</script>

<div
	class="p-4 border border-gray-300 transition-all duration-200 ease-in-out collapse__header hover:bg-gray-200"
	on:click={showCollapse(i)}
>
	{label}
</div>
{#if show === i}
	<div class="p-4 bg-gray-200 collapse__body" transition:slide>
		{content}
	</div>
{/if}
