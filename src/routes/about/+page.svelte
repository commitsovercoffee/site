<script>
	import Frame from "$lib/components/Frame.svelte";
	import Title from "$lib/components/Title.svelte";
	import * as content from "./content";
</script>

<article>
	<section>
		<Frame imageSources={content.photos} />
		{#each content.about as para}
			<p>
				{para}
			</p>
		{/each}
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
