<script>
	import * as content from "./content.js";
	import Typewriter from "$lib/components/Typewriter.svelte";
	import Title from "$lib/components/Title.svelte";
	import Accordion from "$lib/components/Accordion.svelte";
	import Prompt from "$lib/components/Prompt.svelte";
	import Button from "$lib/components/Button.svelte";
	import Frame from "$lib/components/Frame.svelte";
	import Review from "$lib/components/Review.svelte";

	let show = null;
	const items = ["One", "Two", "Three", "Four", "Five"];

	const showCollapse = (i) => {
		i === show ? (show = null) : (show = i);
	};

	export let data;
	let featuredPosts = data.featuredPosts;
</script>

<article>
	<section>
		<Prompt>{content.heading}</Prompt>
		<Typewriter messages={content.remarks} />
		<p>{content.intro}</p>
		<Button type="primary">Let's Talk.</Button>
		<Button type="secondary">Let's not Talk.</Button>
	</section>

	<section>
		<Title>Who am I ?</Title>
		<div class="flex">
			<div class="h-[400px] w-[300px] p-4">
				<Frame src="https://picsum.photos/800" />
			</div>
			<div class="basis-2/3">
				{#each content.whoami as para}
					<p class="m-4">{para}</p>
				{/each}
			</div>
		</div>
	</section>

	<section class="p-4">
		<Title>Reviews</Title>

		<p>
			{content.review}
		</p>

		<div class="my-16">
			{#each content.userReviews as userReview}
				<Review />
			{/each}
		</div>
	</section>

	<section class="p-4">
		<Title>Approach</Title>

		<p class="my-8">
			{content.approach}
		</p>

		{#each content.stages as stage, i}
			<Accordion
				{i}
				{show}
				{showCollapse}
				label={stage.phase}
				content={stage.description}
			/>
		{/each}
	</section>

	<section class="p-4">
		<Title>Skills</Title>
		<p>
			{content.skill}
		</p>

		<div class="flex flex-wrap">
			{#each content.skills as skill}
				<a
					class="no-underline border-2 px-4 py-2 m-2 rounded-xl hover:border-stone-800 hover:bg-stone-300"
					href="/"
				>
					{skill.label}
				</a>
			{/each}
		</div>
	</section>

	<section class="p-4">
		<Title>Featured Blogs</Title>
		<p class="my-32">
			{content.featuredBlog}
		</p>

		<div class=" font-serif">
			{#each featuredPosts as post}
				<div
					class="p-4 hover:border-stone-800 border-t-4 border-t-stone-600 cursor-pointer transition-all duration-200 ease-in even:bg-stone-200 odd:bg-stone-100"
				>
					<a
						class="shadow-md shadow-stone-600 font-normal bg-red-100 no-underline"
						transition:fade
						href={post.path}
					>
						<div
							class="mt-4 flex justify-start p-4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-link"
								><path
									d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
								/><path
									d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
								/></svg
							>

							<p
								class="my-0 mx-4 uppercase text-3xl font-bold underline-offset-8 underline"
							>
								{post.meta
									.title}
							</p>
						</div>
						<p
							class=" font-serif text-xl p-4"
						>
							Lorem ipsum dolor sit
							amet consectetur
							adipisicing elit.
							Mollitia accusamus
							blanditiis eveniet!
							Cupiditate, aperiam
							reprehenderit, pariatur
							voluptatibus nostrum
							repellendus sequi
							commodi labore
							asperiores aliquam quae
							soluta cumque blanditiis
							assumenda dolor!
						</p>
					</a>
				</div>
			{/each}
		</div>
	</section>
</article>
