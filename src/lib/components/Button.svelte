<script>
	export let type = "primary"; // or secondary
	export let href = "";

	const baseStyle =
		"my-8 mr-8 p-4 rounded-2xl border-2 hover:bg-stone-800 transition-colors duration-200 ease-in no-underline hover:prose hover:prose-invert";
</script>

<a {href}>
	{#if type === "primary"}
		<button class={`${baseStyle} bg-stone-300 border-stone-800`}>
			<slot />
		</button>
	{:else if type === "secondary"}
		<button
			class={`${baseStyle} bg-stone-200 border-stone-200 hover:border-stone-800`}
		>
			<slot />
		</button>
	{/if}
</a>
