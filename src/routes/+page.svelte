<script>
	import A from "./components/A.svelte";
	import Title from "./components/Title.svelte";
	import Typewriter from "./components/Typewriter.svelte";

	let featuredBlogs = [
		{
			title: "Why I write these blogs.",
			desc: "Understand the motive that started it all.",
			thumbnail: "https://picsum.photos/400",
			alt: "lorem ipsum",
		},
		{
			title: "Why I write these blogs.",
			desc: "Understand the motive that started it all.",
			thumbnail: "https://picsum.photos/400",
			alt: "lorem ipsum",
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
		<h1>Some catchy, attention stealing line.</h1>
		<p class="h-32">
			<Typewriter />
		</p>

		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing
			elit. Atque, id maiores cum inventore, non vel dolore
			ipsum facere, animi vero velit! Incidunt delectus
			aspernatur similique sit. Ea delectus quo dignissimos.
		</p>

		<p>
			Find me on <A label="GitHub" />, <A label="Mastodon" />, <A
				label="Twitter"
			/> and <A label="YouTube" />. If you enjoy my works,
			consider sponsoring me on GitHub Sponsor to keep them
			sustainable.
		</p>

		<div class="my-8">
			<button
				class="mr-2 bg-slate-200 p-4 rounded-xl hover:bg-slate-800 hover:text-slate-200"
			>
				Let's do it !
			</button>
			<button
				class="bg-slate-200 p-4 rounded-xl hover:bg-slate-800 hover:text-slate-200"
			>
				Let's not do it !
			</button>
		</div>
	</section>

	<section class="p-4">
		<Title>Reviews</Title>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Ea, molestias tempora. Enim, perferendis facilis fuga
			odio nihil modi voluptas, iste accusamus omnis obcaecati
			aliquid necessitatibus cum pariatur. Voluptas, tempora
			nihil!
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
		<Title>About Me</Title>

		<p class="my-8">
			Lorem ipsum dolor sit, amet consectetur adipisicing
			elit. Atque, id maiores cum inventore, non vel dolore
			ipsum facere, animi vero velit! Incidunt delectus
			aspernatur similique sit. Ea delectus quo dignissimos.
		</p>

		<ul>
			<li>Interesting bullet point and an <A />.</li>
			<li>A <A /> and another interesting bullet point.</li>
			<li>
				Interesting bullet point <A />.
			</li>
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
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Sed ducimus ipsa illo ex nobis consectetur repellendus
			debitis unde soluta excepturi. Molestias ab perspiciatis
			consequuntur ducimus dignissimos corporis quos maxime!
			Sint!
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
		<Title>Blogs</Title>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Sequi quos nam praesentium possimus assumenda, qui
			veritatis autem excepturi est ea maxime tempora labore
			saepe eaque, non, illo nostrum repellat distinctio.
		</p>

		<div class="my-16">
			{#each featuredBlogs as blog}
				<a
					href="/"
					class="no-underline hover:grayscale"
				>
					<div
						class="m-0 p-0 my-6 rounded-xl flex bg-slate-200"
					>
						<img
							class="m-0 rounded-xl rounded-r-none object-cover w-1/3"
							src={blog.thumbnail}
							alt={blog.alt}
						/>
						<div
							class="p-4 w-2/3 font-serif"
						>
							<p
								class="m-0 mt-4 font-bold text-xl"
							>
								{blog.title}
							</p>
							<p class="mt-2 text-lg">
								{blog.desc}
							</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>
</article>
