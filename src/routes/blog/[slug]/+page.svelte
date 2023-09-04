<script>
	import Title from "../_components/Title.svelte";
	export let data;

	let selectedTags = new Set(data.post.tags);
	let filteredSummaries = data.summaries;

	filteredSummaries = data.summaries.filter((summary) => {
		return (
			selectedTags.size === 0 ||
			summary.tags.some((t) => selectedTags.has(t))
		);
	});
</script>

<section class="p-4">
	<Title>
		{data.post.title}
	</Title>

	<div>{@html data.post.content}</div>

	<Title>Relevant Blogs</Title>

	<div class="my-16">
		{#each filteredSummaries as { slug, title, tldr }}
			<a
				class="not-prose no-underline font-normal"
				href="/blog/{slug}"
			>
				<div
					class="p-4 rounded-xl border-2 border-dashed cursor-pointer border-transparent hover:border-slate-600 transition-all duration-200 ease-in"
				>
					<p
						class="font-bold decoration-2 underline underline-offset-4"
					>
						{title}
					</p>
					<p class="ml-8">{tldr}</p>
				</div>
			</a>
			<hr />
		{/each}
	</div>
</section>
