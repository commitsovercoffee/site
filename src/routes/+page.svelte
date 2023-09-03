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
	<h1>Bold, Attention stealing sentence.</h1>

	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
		id maiores cum inventore, non vel dolore ipsum facere, animi
		vero velit! Incidunt delectus aspernatur similique sit. Ea
		delectus quo dignissimos.
	</p>

	<ul class="my-16">
		<li>Interesting bullet point and an <A />.</li>
		<li>A <A /> and another interesting bullet point.</li>
		<li>
			Interesting bullet point <A />.
		</li>
	</ul>

	<p>
		Find me on <A label="GitHub" />, <A label="Mastodon" />, <A
			label="Twitter"
		/> and <A label="YouTube" />. If you enjoy my works, consider
		sponsoring me on GitHub Sponsor to keep them sustainable.
	</p>

	<svg class="my-32 p-2 w-full h-auto" viewBox="100 0 400 200">
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

	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
		id maiores cum inventore, non vel dolore ipsum facere, animi
		vero velit! Incidunt delectus aspernatur similique sit. Ea
		delectus quo dignissimos.
	</p>

	<section class="my-32">
		<h2>Skills</h2>
		<div class="flex flex-wrap items-center p-2 m-6 rounded-xl">
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

	<section class="my-32">
		<h2>Featured Blogs</h2>
		{#each featuredBlogs as blog}
			<div class="flex p-2 m-6 rounded-xl bg-slate-200">
				<img
					class="m-4 rounded-xl"
					src="https://picsum.photos/200"
					alt=""
				/>
				<div class="m-2 p-4 w-full">
					<p class="my-0 text-2xl font-black">
						{blog.title}
					</p>
					<p class="mt-4 text-base">
						{blog.desc}
					</p>
				</div>
			</div>
		{/each}
	</section>
</article>
