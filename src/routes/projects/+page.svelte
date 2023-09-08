<script>
	import Title from "$lib/components/Title.svelte";
	import Project from "$lib/components/Project.svelte";
	import * as content from "./content";
</script>

<section>
	<Title>Projects</Title>
	<p>
		{content.intro}
	</p>

	<div class="flex justify-between flex-wrap">
		{#each content.projects as project}
			<div class="flex-1 p-2">
				<Project />
			</div>
		{/each}
	</div>
</section>
