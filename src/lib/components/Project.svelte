<script>
	export let name = "Sassy Project Name";
	export let desc = "This project does xyz ...";
	export let repo = "repository";
	export let demo = "demo";

	const tagStyle =
		"no-underline px-2 mx-1 border-2 rounded-xl border-stone-300 hover:border-stone-800 bg-stone-300 transition-colors duration-200 ease-in ";
</script>

<div class="p-4 rounded-2xl bg-stone-200 shadow-md shadow-stone-300">
	<p>{name}</p>
	<p>{desc}</p>
	<div class="flex">
		<a
			class={tagStyle}
			href={`https://github.com/commitsovercoffee/${repo}`}
			>source</a
		>
		{#if demo != ""}
			<a class={tagStyle} href="">demo</a>
		{/if}

		{#if demo != ""}
			<a class={tagStyle} href="">youtube</a>
		{/if}
	</div>
</div>
