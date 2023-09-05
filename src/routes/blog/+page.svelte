<script>
	import Title from "$lib/components/Title.svelte";
	import { fade } from "svelte/transition";

	export let data;

	let selectedTags = new Set();
	let filteredPosts = data.posts;

	function updateFilterPosts(tag) {
		if (selectedTags.has(tag)) {
			selectedTags.delete(tag);
		} else {
			selectedTags.add(tag);
		}

		selectedTags = selectedTags;

		filteredPosts = data.posts.filter((post) => {
			return (
				selectedTags.size === 0 ||
				post.meta.tags.some((t) => selectedTags.has(t))
			);
		});
	}
</script>

<section class="p-4">
	<Title>Blogs</Title>
	<p>
		Welcome to my blog, where I share my thoughts, experiences, and
		passions. Explore topics close to my heart and join me on a
		journey of discovery.
	</p>

	<div class="my-8">
		{#each [...new Set(data.posts.flatMap((p) => p.meta.tags))] as tag}
			<button
				class="px-2 py-1 m-1 rounded-md {selectedTags.has(
					tag
				)
					? 'bg-teal-300'
					: 'bg-slate-200'}"
				on:click={() => updateFilterPosts(tag)}
			>
				{tag}
			</button>
		{/each}
	</div>

	<div class="my-16">
		{#each filteredPosts as { path, meta }}
			{#if meta.published}
				<a
					class="not-prose no-underline font-normal"
					href={path}
					transition:fade
				>
					<div
						class="p-4 rounded-xl border-2 border-dashed cursor-pointer border-transparent hover:border-slate-600 transition-all duration-200 ease-in"
					>
						<p
							class="font-bold underline underline-offset-4"
						>
							{meta.title}
						</p>
						<p class="ml-8">
							{meta.desc}
							{meta.tags}
						</p>
					</div>
				</a>
				<hr />
			{/if}
		{/each}
	</div>
</section>
