<script>
	import Title from "../components/Title.svelte";
	export let data;
	let selectedTags = new Set();
	let filteredSummaries = data.summaries;

	function updateFilterSummaries(tag) {
		if (selectedTags.has(tag)) {
			selectedTags.delete(tag);
		} else {
			selectedTags.add(tag);
		}

		filteredSummaries = data.summaries.filter((summary) => {
			return (
				selectedTags.size === 0 ||
				summary.tags.some((t) => selectedTags.has(t))
			);
		});
	}
</script>

<section class="p-4">
	<Title>Blogs</Title>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
		dicta magni nemo placeat distinctio alias? Provident, quo nemo.
		Incidunt, pariatur. Omnis odio voluptates enim. Nam error
		quibusdam rem est similique?
	</p>
	<div class="my-8">
		{#each [...new Set(data.summaries.flatMap((s) => s.tags))] as tag}
			<button
				class="px-2 py-1 m-1 rounded-md bg-gray-200 hover:bg-gray-300"
				on:click={() => updateFilterSummaries(tag)}
			>
				{tag}
			</button>
		{/each}
		<button
			class="px-2 py-1 m-1 rounded-md bg-gray-200 hover:bg-gray-300"
			on:click={() => {
				selectedTags.clear();
				filteredSummaries = data.summaries;
			}}
		>
			Clear Filters
		</button>
	</div>

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
