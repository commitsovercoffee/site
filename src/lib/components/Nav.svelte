<script>
	import { page } from "$app/stores";
	let navlinks = ["home", "projects", "blog", "about"];

	$: currentURL =
		$page.url.pathname.split("/").pop() || $page.url.pathname;

	const navStyle =
		"font-plex_mono m-2 border-2 border-neutral-800 rounded-xl px-4 py-2 no-underline uppercase transition-all duration-200 ease-in-out";
</script>

<section class="text-neutral-200 prose prose-invert">
	<a href="/" class="no-underline">
		<p class="font-plex_serif font-black text-3xl md:text-4xl">
			<img
				class="m-2 p-2 inline h-14"
				src="favicon.png"
				alt=""
			/>
			Commits Over Coffee
		</p>
	</a>

	<div
		class="flex w-fit font-plex_mono font-medium uppercase tracking-widest"
	>
		{#each navlinks as link}
			{#if link === "home"}
				<a
					class={`${navStyle} ${
						currentURL === "/"
							? "bg-neutral-800"
							: "hover:bg-neutral-800"
					}`}
					href={`/`}
				>
					{link}
				</a>
			{:else if link === currentURL}
				<a
					class={`${navStyle} ${
						link === currentURL &&
						"border-neutral-800 bg-neutral-800 prose prose-invert"
					}`}
					href={link === "home"
						? "/"
						: `/${link}`}
				>
					{link}
				</a>
			{:else}
				<a
					class={`${navStyle} hover:bg-neutral-800 hover:prose hover:prose-invert hover:border-neutral-800`}
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
