<script>
	import * as content from "./content.js";
	import Typewriter from "$lib/components/Typewriter.svelte";
	import Title from "$lib/components/Title.svelte";
	import Accordion from "$lib/components/Accordion.svelte";
	import Prompt from "$lib/components/Prompt.svelte";
	import Button from "$lib/components/Button.svelte";
	import Review from "$lib/components/Review.svelte";
	import Tag from "$lib/components/Tag.svelte";
	import Post from "$lib/components/Post.svelte";

	export let data;
	let featuredPosts = data.featuredPosts;

	// Accordion
	let show = -1;
	const showCollapse = (i) => {
		i === show ? (show = -1) : (show = i);
	};
</script>

<article>
	<section>
		<Prompt>{content.heading}</Prompt>
		<Typewriter messages={content.remarks} />
		<p>{content.intro}</p>
		<div class="flex">
			<Button type="primary">Let's Talk.</Button>
		</div>
	</section>

	<section>
		<Title>Who am I ?</Title>
		<img
			src="https://picsum.photos/200"
			alt="a tabletop with tea"
			class="h-48 md:h-72 w-48 md:w-72 bg-stone-300 my-16 mx-auto rounded-full p-2 border-2 border-stone-800 object-cover shadow-md shadow-stone-600"
		/>
		{#each content.whoami as para}
			<p>{para}</p>
		{/each}
	</section>

	<section>
		<Title>Reviews</Title>
		<p>
			{content.review}
		</p>
		<div class="mt-16 mb-64">
			{#each content.userReviews as userReview}
				<Review
					link={userReview.link}
					name={userReview.name}
					comment={userReview.comment}
				/>
			{/each}
		</div>
	</section>

	<section>
		<Title>Approach</Title>
		<p>
			{content.approach}
		</p>
		<div class="mt-16 mb-64">
			{#each content.stages as stage, i}
				<Accordion
					{i}
					{show}
					{showCollapse}
					label={stage.phase}
					content={stage.description}
				/>
			{/each}
		</div>
	</section>

	<section>
		<Title>Skills</Title>
		<p>
			{content.skill}
		</p>
		<div class="mt-16 mb-64 flex flex-wrap">
			{#each content.skills as skill}
				<Tag>
					{skill.label}
				</Tag>
			{/each}
		</div>
	</section>

	<section>
		<Title>Featured Blogs</Title>
		<p>
			{content.featuredBlog}
		</p>
		<div class="mt-16 mb-64">
			<Post posts={featuredPosts} />
		</div>
	</section>
</article>
