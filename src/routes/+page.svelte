<script>
	import * as content from "./content.js";
	import Typewriter from "$lib/components/Typewriter.svelte";
	import Title from "$lib/components/Title.svelte";
	import Accordion from "$lib/components/Accordion.svelte";

	let show = null;
	const items = ["One", "Two", "Three", "Four", "Five"];

	const showCollapse = (i) => {
		i === show ? (show = null) : (show = i);
	};

	export let data;
	let featuredPosts = data.featuredPosts;
</script>

<article>
	<section class="p-4 mt-32">
		<h1 class="m-0 p-0 bg-stone-300 inline leading-loose uppercase">
			{content.heading}
		</h1>
		<p class="h-16">
			<Typewriter messages={content.remarks} />
		</p>

		<p>
			{content.intro}
		</p>

		<p />

		<div class="my-8 font-bold">
			<a
				href="mailto:commitsovercoffee@gmail.com?subject=I%20have%20an%20app%20idea!&body=I'm%20interested%20in%20discussing%20a%20potential%20project...%20 "
			>
				<button
					class="no-underline border-2 p-4 m-4 rounded-2xl border-stone-800 bg-stone-300 hover:bg-stone-800 hover:text-stone-300 transition-colors duration-200 ease-in font-black"
				>
					Let's Talk!
				</button>
			</a>

			<a
				href="mailto:commitsovercoffee@gmail.com?subject=I%20have%20an%20app%20idea!&body=I'm%20interested%20in%20discussing%20a%20potential%20project...%20 "
			>
				<button
					class="no-underline p-4 m-4 rounded-2xl border-stone-800 bg-stone-300 hover:bg-stone-800 hover:text-stone-300 transition-colors duration-200 ease-in"
				>
					Let's Not Talk!
				</button>
			</a>
		</div>
	</section>

	<section class="p-4">
		<Title>Who am I ?</Title>

		<div class="flex">
			<img
				alt={content.dp.alt}
				src={content.dp.src}
				class="border-2 shadow-md shadow-stone-400 m-4 p-2 h-auto transition-all duration-200 ease-linear delay-150"
			/>
			<div class="px-4">
				{#each content.whoami as para}
					<p>{para}</p>
				{/each}

				<p class="inline">
					{#each content.socials as social}
						<a href={social.link}>
							{social.platform}
						</a>
					{/each}
				</p>
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
				<div
					class=" m-0 p-0 my-6 border-t-4 border-stone-800 flex even:flex-row-reverse bg-stone-200 shadow-md"
				>
					<img
						class="m-0 object-cover w-1/3"
						src="https://picsum.photos/400"
						alt="some thing"
					/>
					<div class="p-4 w-2/3 font-serif">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="h-12 inline"
							><title
								>format-quote-open</title
							><path
								d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z"
							/></svg
						>
						<p class="m-0 px-4 text-lg">
							{userReview.comment}
						</p>
						<p
							class="m-0 mt-4 px-4 text-right"
						>
							{userReview.name}
						</p>
					</div>
				</div>
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
