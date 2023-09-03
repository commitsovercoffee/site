<script>
	import A from "./components/A.svelte";

	let featuredBlogs = [
		{
			title: "Why I write these blogs.",
			desc: "Understand the motive that started it all.",
		},
		{
			title: "Guide to self taught CS mastery.",
			desc: "Understand what makes a good engineer.",
		},
	];

	let skills = ["bash", "git", "html", "css", "js", "go", "c", "python"];
</script>

<article class="my-32 selection:bg-teal-300">
	<section class="p-4">
		<h1>Bold, Attention stealing sentence.</h1>

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

	<hr class="my-24" />

	<section class="p-4">
		<h2>About Me</h2>
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
				stroke="black"
				stroke-dasharray="4"
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
				stroke="black"
				stroke-dasharray="4"
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

	<hr class="my-24" />

	<section class="p-4">
		<h2>Skills</h2>
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

	<section class="p-4 my-32">
		<h2 class="mb-16">Featured Blogs</h2>
		{#each featuredBlogs as blog}
			<a href="/" class="no-underline hover:grayscale">
				<div
					class="m-0 p-0 my-6 rounded-xl flex bg-slate-200"
				>
					<img
						class="m-0 rounded-xl rounded-r-none object-cover w-1/3"
						src="https://picsum.photos/400"
						alt="something"
					/>
					<div class="p-4 w-2/3">
						<h2
							class="m-0 mt-4 font-black font-serif"
						>
							{blog.title}
						</h2>
						<p
							class="mt-2 text-base font-mono"
						>
							{blog.desc}
						</p>
					</div>
				</div>
			</a>
		{/each}
	</section>
</article>
