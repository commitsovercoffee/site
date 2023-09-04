<script>
	import * as content from "./content.js";
	import Typewriter from "./_components/Typewriter.svelte";
	import Title from "./_components/Title.svelte";
</script>

<article class=" selection:bg-teal-300">
	<section class="p-4 mt-32">
		<h1 class="bg-teal-300 inline">
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
					class="mr-2 bg-slate-200 p-4 rounded-xl hover:bg-slate-800 hover:text-slate-200"
				>
					Let's Talk!
				</button>
			</a>

			<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
				<button
					class="bg-slate-200 p-4 rounded-xl hover:bg-slate-800 hover:text-slate-200"
				>
					Ahh ... !
				</button>
			</a>
		</div>
	</section>

	<section class="p-4">
		<Title>Who am I ?</Title>
		<img
			alt={content.dp.alt}
			src={content.dp.src}
			class="border-2 lg:float-left m-6 p-2 h-auto transition-all duration-200 ease-linear delay-150"
		/>
		<div class="px-4">
			{#each content.whoami as para}
				<p>{para}</p>
			{/each}

			<p class="inline">
				Feel free to reach out ! Don't feel shy. You can
				find me on these platforms.
				{#each content.socials as social}
					<a
						class="inline mx-1 hover:bg-teal-300"
						href={social.link}
					>
						{social.platform}
					</a>
				{/each}
			</p>
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
					class="m-0 p-0 my-6 border-t-4 border-slate-500 flex even:flex-row-reverse bg-slate-100 shadow-md"
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
							class="h-12 inline fill-current text-slate-800 opacity-40"
							><title
								>format-quote-open</title
							><path
								d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z"
							/></svg
						>
						<p
							class="m-0 px-4 text-lg text-slate-600"
						>
							{userReview.comment}
						</p>
						<p
							class="m-0 mt-4 px-4 text-slate-400 text-right"
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

		<ul>
			{#each content.stages as stage}
				<li class="text-slate-600">
					<span class="text-slate-800 font-bold"
						>{stage.phase}</span
					>
					{stage.description}
				</li>
			{/each}
		</ul>

		<svg class="my-16 p-2 w-full h-auto" viewBox="100 0 400 200">
			<circle
				cx="220"
				cy="100"
				r="100"
				class="fill-current text-yellow-500 opacity-40"
			/>
			<text
				x="220"
				y="100"
				text-anchor="middle"
				class="fill-current text-amber-800 select-none"
				>Design</text
			>

			<circle
				cx="380"
				cy="100"
				r="100"
				class="fill-current text-blue-500 opacity-40"
			/>
			<text
				x="380"
				y="100"
				text-anchor="middle"
				class="fill-current text-blue-800 select-none"
				>Development</text
			>
		</svg>
	</section>

	<section class="p-4">
		<Title>Skills</Title>
		<p>
			{content.skill}
		</p>
		<div class="flex flex-wrap rounded-xl p-4">
			{#each content.skills as skill}
				<a href={skill.link} class="hover:grayscale">
					<img
						class="m-2 rounded-xl"
						src={skill.src}
						alt={skill.alt}
					/>
				</a>
			{/each}
		</div>
	</section>

	<section class="p-4">
		<Title>Featured Blogs</Title>
		<p>
			{content.featuredBlog}
		</p>

		<div class="my-16">
			{#each content.featuredBlogs as { slug, title, tldr }}
				<a
					class="not-prose no-underline font-normal"
					href="/blog/{slug}"
					transition:fade
				>
					<div
						class="p-4 rounded-xl border-2 border-dashed cursor-pointer border-transparent hover:border-slate-600 transition-all duration-200 ease-in"
					>
						<p
							class="font-bold underline underline-offset-4"
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
</article>
