<script>
	import { onMount } from "svelte";
	import { page } from "$app/stores";

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

<article>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>

{#if relevantPosts.length > 0}
	<section>
		<h2>Relevant Posts</h2>
		<ul>
			{#each relevantPosts as post}
				<li>
					<a href={`${post.path}`}>
						<h3>{post.meta.title}</h3>
					</a>
					<p>{post.meta.desc}</p>
				</li>
			{/each}
		</ul>
	</section>
{/if}
