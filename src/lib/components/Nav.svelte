<script>
	let navlinks = ["home", "projects", "blog", "about"];
</script>

<p
	class="font-serif font-light italic text-3xl text-stone-800 md:text-4xl underline underline-offset-8"
>
	<img class="m-2 p-2 inline h-14" src="favicon.png" alt="" />
	Commits Over Coffee
</p>
<div>
	{#each navlinks as link}
		<a
			class="m-2 border-2 border-stone-200 hover:border-stone-800 rounded-xl p-2 no-underline uppercase hover:bg-stone-800 hover:prose hover:prose-invert transition-colors duration-200 ease-in-out"
			href={link === "home" ? "/" : `/${link}`}>{link}</a
		>
	{/each}
</div>
