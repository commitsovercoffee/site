<script>
	import A from "./components/A.svelte";
	import Title from "./components/Title.svelte";
	import Typewriter from "./components/Typewriter.svelte";

	const stages = [
		{
			phase: "Initial Consultation",
			description:
				"We begin our journey with a detailed conversation where we discuss your project goals, objectives, and vision. During this phase, we'll define the scope of work and establish a clear understanding of your needs.",
		},
		{
			phase: "Planning and Strategy",
			description:
				"After our initial meeting, I'll dive into the intricacies of your project. This involves developing a comprehensive strategy, outlining timelines, milestones, and deliverables.",
		},
		{
			phase: "Design Phase",
			description:
				"With a clear plan in place, I'll start sketching out the interface for the app. Expect regular updates and opportunities for your feedback throughout this phase.",
		},
		{
			phase: "Development",
			description:
				"As the design takes shape, we transition into the development phase.  I'll be meticulously coding, testing, and refining the technical aspects of your project to ensure it functions flawlessly.",
		},
		{
			phase: "Testing and Refinement",
			description:
				"The dance continues as we test every nook and cranny of the project, ensuring it aligns with your objectives and meets our high-quality standards. We'll make any necessary adjustments and refinements based on your feedback.",
		},
		{
			phase: "Deployment",
			description:
				"With your project polished to perfection, it's time to take it live. I'll handle the technical aspects of deployment, ensuring a smooth transition from development to the real world.",
		},
		{
			phase: "Post-Launch Support",
			description:
				"Our partnership doesn't end at launch. I'll provide ongoing support, addressing any issues, updates, or enhancements that may arise as your project evolves.",
		},
	];

	let featuredBlogs = [
		{
			slug: "welcome",
			title: "Welcome to the Aperture Science",
			content: "<p>We hope your brief detention in the relaxation vault has been a pleasant one.</p><p>Your specimen has been processed and we are now ready to begin the test proper.</p>",
			tags: ["alpha", "beta"],
			tldr: "Welcome to the Aperture Science center, where testing begins after a relaxing detention.",
		},

		{
			slug: "safety",
			title: "Safety notice",
			content: "<p>While safety is one of many Enrichment Center Goals, the Aperture Science High Energy Pellet, seen to the left of the chamber, can and has caused permanent disabilities, such as vaporization. Please be careful.</p>",
			tags: ["apple", "banana"],
			tldr: "Beware of the dangerous Aperture Science High Energy Pellet in the chamber.",
		},
	];

	let skills = ["bash", "git", "html", "css", "js", "go", "c", "python"];

	const userReviews = [
		{
			id: 1,
			name: "John Doe",
			rating: 4.5,
			comment: "Great website! Easy to navigate and find the information I needed.",
			date: "2023-08-15",
		},
		{
			id: 2,
			name: "Alice Smith",
			rating: 5.0,
			comment: "I love this website! It's so well-designed and informative.",
			date: "2023-08-16",
		},
		{
			id: 3,
			name: "Bob Johnson",
			rating: 3.0,
			comment: "It's decent, but there are some areas that could be improved.",
			date: "2023-08-17",
		},
		{
			id: 4,
			name: "Eva Green",
			rating: 4.0,
			comment: "I found the website useful and user-friendly.",
			date: "2023-08-18",
		},
	];

	// You can add more reviews as needed
</script>

<article class=" selection:bg-teal-300">
	<section class="p-4 mt-32">
		<h1 class="bg-teal-300 inline">
			Build reliable apps for remarkable impact.
		</h1>
		<p class="h-16">
			<Typewriter />
		</p>

		<p>
			I firmly believe that there should be a harmonious blend
			of design and development in software, resulting in
			dependable solutions that empower you to solve problems
			effectively. And that's precisely what I specialize in
			here.
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
			alt="something"
			src="https://via.placeholder.com/200x300"
			class="border-2 lg:float-left m-6 p-2 h-auto transition-all duration-200 ease-linear delay-150"
		/>
		<div class="px-4">
			<p>
				I am an independent software developer with 3
				years of experience. Currently building learning
				solutions with Quest Alliance. Working remotely
				from Ranchi, India.
			</p>

			<p>
				You can find me on <A label="GitHub" />, <A
					label="Mastodon"
				/>, <A label="Twitter" /> and <A
					label="YouTube"
				/>. If you enjoy my works, consider sponsoring
				me on GitHub Sponsor to keep them sustainable.
			</p>
		</div>
	</section>

	<section class="p-4">
		<Title>Reviews</Title>
		<p>
			Grateful for the opportunity to work with some fantastic
			folks. Their kind words keep me inspired and motivated
			to keep delivering top-notch work.
		</p>

		<div class="my-16">
			{#each userReviews as userReview}
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
			Wondering how it all unfolds? Once we've connected and
			it's clear that we're a great match, here's what lies
			ahead in the journey.
		</p>

		<ul>
			{#each stages as stage}
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
			Your choice of tools can either be the wind in your
			sails or the anchor holding you back. Here's a glimpse
			of my current arsenal.
		</p>
		<div class="flex flex-wrap rounded-xl p-4">
			{#each skills as skill}
				<a href="/" class="hover:grayscale">
					<img
						class="m-2 rounded-xl"
						src="https://picsum.photos/120"
						alt=""
					/>
				</a>
			{/each}
		</div>
	</section>

	<section class="p-4">
		<Title>Featured Blogs</Title>
		<p>
			Occasionally, I take a moment to gather my thoughts and
			distill them into insightful blog posts. Give them a
			read; you might uncover something beneficial.
		</p>

		<div class="my-16">
			{#each featuredBlogs as { slug, title, tldr }}
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
