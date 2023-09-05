<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import Title from "$lib/components/Title.svelte";

	export let data;

	let allPosts = [];
	let relevantPosts = [];

	// Function to fetch all posts from the API
	async function fetchAllPosts() {
		try {
			const response = await fetch("/api/posts");
			if (response.ok) {
				allPosts = await response.json();
			} else {
				console.error(
					"Error fetching posts:",
					response.statusText
				);
			}
		} catch (error) {
			console.error("Error fetching posts:", error);
		}
	}

	onMount(async () => {
		// Fetch all posts when the component is mounted
		await fetchAllPosts();

		// Filter relevant posts with matching tags and exclude the current blog
		relevantPosts = allPosts.filter((post) => {
			return (
				data.tags.some((tag) =>
					post.meta.tags.includes(tag)
				) && post.meta.path !== $page.url // Exclude the current blog by comparing paths
			);
		});

		console.log(relevantPosts);
	});
</script>

<section class="p-4">
	<Title>
		{data.title}
	</Title>

	<div class="p-8 m-0">
		<svelte:component this={data.content} />
	</div>

	{#if relevantPosts.length > 0}
		<section class="my-16">
			<Title>Relevant Posts</Title>
			{#each relevantPosts as post}
				<a
					class="not-prose no-underline font-normal"
					href={`${post.path}`}
				>
					<div
						class="p-4 rounded-xl border-2 border-dashed cursor-pointer border-transparent hover:border-slate-600 transition-all duration-200 ease-in"
					>
						<p
							class="font-bold underline underline-offset-4"
						>
							{post.meta.title}
						</p>
						<p class="ml-8">
							{post.meta.desc}
						</p>
					</div>
				</a>
				<hr />
			{/each}
		</section>
	{/if}
</section>
