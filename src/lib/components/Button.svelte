<script>
	export let type = "primary"; // or secondary
	export let href = "";

	const baseStyle =
		"font-plex_mono m-2 rounded-xl p-4 font-bold no-underline uppercase transition-all duration-200 ease-in-out";
</script>

<a {href}>
	{#if type === "primary"}
		<button
			class={`${baseStyle} bg-neutral-800 text-neutral-200 hover:shadow-md hover:shadow-neutral-600`}
		>
			<slot />
		</button>
	{:else if type === "secondary"}
		<button class={`${baseStyle} bg-neutral-200 hover:bg-sky-300`}>
			<slot />
		</button>
	{/if}
</a>
