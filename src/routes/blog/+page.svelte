<script>
	import Title from "$lib/components/Title.svelte";
	import Post from "$lib/components/Post.svelte";

	export let data;

	let selectedTags = new Set();
	let filteredPosts = data.posts;

	console.log(filteredPosts);

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

<article>
	<section>
		<p>
			Welcome to my blog, where I share my thoughts,
			experiences, and passions. Explore topics close to my
			heart and join me on a journey of discovery.
		</p>
	</section>

	<section>
		{#each [...new Set(data.posts.flatMap((p) => p.meta.tags))] as tag}
			<button
				class="m-2 rounded-xl border-2 border-neutral-800 px-2 py-1 hover:bg-neutral-800 transition-colors ease-in-out duration-200

				{selectedTags.has(tag) && 'bg-neutral-800'}"
				on:click={() => updateFilterPosts(tag)}
			>
				{tag}
			</button>
		{/each}
	</section>

	<section class="my-16">
		<Post posts={filteredPosts} />
	</section>
</article>
