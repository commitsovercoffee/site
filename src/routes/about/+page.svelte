<script>
	import Title from "$lib/components/Title.svelte";
	import * as content from "./content";
	import Carousel from "$lib/components/Carousel.svelte";
</script>

<article>
	<section>
		<div
			class="m-0 p-0 w-full flex justify-center overflow-x-scroll"
		>
			{#each content.photos as photo}
				<img
					class="h-48 w-48 min-h-200 p-2 m-2 border-8 border-stone-800 bg-stone-200 first:rotate-3"
					src={photo.src}
					alt=""
				/>
			{/each}
		</div>

		<div class="mt-16">
			{#each content.about as para}
				<p>
					{para}
				</p>
			{/each}
		</div>
	</section>

	<section>
		<Title>Random Facts</Title>

		<ul>
			{#each content.facts as fact}
				<li>
					{fact}
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<Title>Favorites</Title>

		<ul>
			{#each Object.entries(content.favorites) as [category, favorite]}
				<li>
					<span class="font-bold">{category}</span
					>: {favorite}
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<Title>Contact</Title>
		<p>
			{content.contact}
		</p>
	</section>
</article>
