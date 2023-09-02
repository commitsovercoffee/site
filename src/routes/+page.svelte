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

	<div class="mt-32 flex justify-center">
		<div
			class="flex -z-10 justify-center items-center relative left-6 rounded-full bg-teal-300 w-60 h-60 opacity-60"
		>
			<span class="z-10 text-slate-800"> Design </span>
		</div>

		<div
			class="flex -z-10 justify-center items-center relative right-6 rounded-full bg-amber-300 w-60 h-60 opacity-60"
		>
			<span class="z-10 text-slate-800"> Development </span>
		</div>
	</div>
</article>
