<script>
	import * as content from "./content";

	const tagStyle =
		"no-underline px-2 mx-1 rounded-xl border-2 border-neutral-800 hover:border-neutral-200 bg-neutral-800 text-neutral-200 transition-colors duration-200 ease-in ";
</script>

<section>
	<p class="font-plex_sans">
		{content.intro}
	</p>

	<div class="flex flex-wrap">
		{#each content.projects as project}
			<div
				class="m-2 p-4 border-2 border-neutral-800 grow rounded-xl flex flex-col justify-between"
			>
				<div>
					<p
						class="font-plex_mono text-neutral-200"
					>
						{project.name}
					</p>
					<p
						class="font-plex_sans text-neutral-400"
					>
						{project.desc}
					</p>
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
