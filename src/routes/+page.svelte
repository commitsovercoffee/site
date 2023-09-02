<script>
	import A from "./components/A.svelte";
</script>

<article class="mt-32 selection:bg-teal-300">
	<h1>Bold, Attention stealing sentence.</h1>

	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
		id maiores cum inventore, non vel dolore ipsum facere, animi
		vero velit! Incidunt delectus aspernatur similique sit. Ea
		delectus quo dignissimos.
	</p>

	<ul>
		<li>Interesting bullet point and an <A />.</li>
		<li>A <A /> and another interesting bullet point.</li>
		<li>
			Interesting bullet point <A />.
		</li>
	</ul>

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
</article>
