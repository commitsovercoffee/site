<script>
	import { page } from "$app/stores";
	let navlinks = ["home", "projects", "blog", "about"];

	$: currentURL =
		$page.url.pathname.split("/").pop() || $page.url.pathname;

	const navStyle =
		"m-2 border-2 border-stone-200 rounded-xl p-2 no-underline uppercase transition-all duration-200 ease-in-out";
</script>

<section>
	<a href="/" class="no-underline">
		<p
			class="font-serif font-light italic text-3xl text-stone-800 md:text-4xl underline underline-offset-8"
		>
			<img
				class="m-2 p-2 inline h-14"
				src="favicon.png"
				alt=""
			/>
			Commits Over Coffee
		</p>
	</a>

	<div class="w-fit">
		{#each navlinks as link}
			{#if link === "home"}
				<a
					class={`${navStyle} ${
						currentURL === "/" &&
						"border-stone-800 bg-stone-800 prose prose-invert"
					}`}
					href={`/`}
				>
					{link}
				</a>
			{:else if link === currentURL}
				<a
					class={`${navStyle} ${
						link === currentURL &&
						"border-stone-800 bg-stone-800 prose prose-invert"
					}`}
					href={link === "home"
						? "/"
						: `/${link}`}
				>
					{link}
				</a>
			{:else}
				<a
					class={`${navStyle} hover:bg-stone-800 hover:prose hover:prose-invert hover:border-stone-800`}
					href={link === "home"
						? "/"
						: `/${link}`}
				>
					{link}
				</a>
			{/if}
		{/each}
	</div>
</section>
