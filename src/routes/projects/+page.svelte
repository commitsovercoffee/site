<script>
	import * as content from "./content";

	const tagStyle =
		"no-underline px-2 mx-1 border-2 rounded-xl border-stone-300 hover:border-stone-800 bg-stone-300 transition-colors duration-200 ease-in ";
</script>

<section>
	<p>
		{content.intro}
	</p>

	<div class="flex flex-wrap">
		{#each content.projects as project}
			<div
				class="m-2 p-4 border-2 border-stone-200 grow rounded-xl flex flex-col justify-between shadow-md shadow-stone-200"
			>
				<div>
					<p>{project.name}</p>
					<p>{project.desc}</p>
				</div>

				<div class="p-2 flex flex-wrap">
					<a
						class={tagStyle}
						href={`https://github.com/commitsovercoffee/${project.repo}`}
						>source</a
					>
					{#if project.demo != ""}
						<a
							class={tagStyle}
							href={project.demo}
							>demo</a
						>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>
