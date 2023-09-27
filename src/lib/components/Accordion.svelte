<script>
	import { slide } from "svelte/transition";

	export let i = -1;
	export let show = -1;

	export let showCollapse;
	export let label = "";
	export let content = "";

	let buttonStyle =
		"p-4 border border-neutral-800 w-full text-left transition-color duration-200 ease-in-out hover:bg-neutral-800";
</script>

<button
	class=" {buttonStyle} {show === i && 'bg-neutral-800'}"
	on:click={showCollapse(i)}
>
	{label}
</button>

{#if show === i}
	<div class="p-4 bg-neutral-900" transition:slide>
		{content}
	</div>
{/if}
