<script>
	import * as content from "./content.js";
	import Typewriter from "$lib/components/Typewriter.svelte";
	import Title from "$lib/components/Title.svelte";
	import Accordion from "$lib/components/Accordion.svelte";
	import Prompt from "$lib/components/Prompt.svelte";
	import Button from "$lib/components/Button.svelte";
	import Frame from "$lib/components/Frame.svelte";
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
			<Button type="secondary">Let's Not Talk.</Button>
		</div>
	</section>

	<section>
		<Title>Who am I ?</Title>
		<Frame />
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
