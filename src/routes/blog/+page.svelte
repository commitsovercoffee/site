<script>
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

<h1>Blog</h1>

<div class="mb-4">
	<p>Filter by Tags:</p>
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

<ul>
	{#each filteredSummaries as { slug, title, tags }}
		<li><a href="/blog/{slug}">{title}</a> {tags}</li>
	{/each}
</ul>
