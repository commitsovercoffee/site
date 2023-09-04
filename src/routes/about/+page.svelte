<script>
	import Title from "../_components/Title.svelte";
	import * as content from "./content";
</script>

<section class="p-4">
	<Title>ABout Me</Title>

	<section class="flex flex-wrap justify-center">
		{#each content.photos as photo}
			<div
				class="h-min m-2 p-0 shadow-lg odd:-rotate-2 even:rotate-2"
			>
				<img
					alt={photo.alt}
					src={photo.src}
					class="m-0 p-4 w-[200px] h-auto transition-all duration-200 ease-linear delay-150"
				/>
			</div>
		{/each}
	</section>

	{#each content.about as para}
		<p>
			{para}
		</p>
	{/each}

	<Title>Random Facts</Title>

	<ul>
		{#each content.facts as fact}
			<li>
				{fact}
			</li>
		{/each}
	</ul>

	<Title>Favorites</Title>

	<ul>
		{#each Object.entries(content.favorites) as [category, favorite]}
			<li>
				<span class="font-bold">{category}</span>: {favorite}
			</li>
		{/each}
	</ul>

	<Title>Contact</Title>
	<p>
		{content.contact}
	</p>
</section>
