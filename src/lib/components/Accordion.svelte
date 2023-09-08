<script>
	import { slide } from "svelte/transition";

	export let i = -1;
	export let show = -1;

	export let showCollapse;
	export let label = "";
	export let content = "";

	let buttonStyle =
		"p-4 border border-stone-300 w-full text-left transition-color duration-200 ease-in-out hover:bg-stone-300";
</script>

<button
	class=" {buttonStyle} {show === i && 'bg-stone-300'}"
	on:click={showCollapse(i)}
>
	{label}
</button>

{#if show === i}
	<div class="p-4 bg-stone-200" transition:slide>
		{content}
	</div>
{/if}
