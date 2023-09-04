<script>
	import Title from "../_components/Title.svelte";
	import * as content from "./content";
</script>

<section class="py-4">
	<Title>Projects</Title>

	<p class="my-8">
		{content.intro}
	</p>

	<div class="flex flex-wrap justify-center">
		{#each content.projects as project}
			<div class="p-4 m-2 rounded-xl shadow-md bg-slate-100">
				<p>
					<a
						href="/"
						class="p-2 underline decoration-2 underline-offset-8 decoration-transparent hover:decoration-slate-800 transition duration-300 delay-50 ease-in"
					>
						{project.name}
					</a>
				</p>
				<p>
					{project.desc}
				</p>
				<a
					href={`https://github.com/commitsovercoffee/${project.repo}`}
					class="px-2 py-1 bg-zinc-100 border-2 border-zinc-200 rounded-xl hover:border-zinc-900 no-underline transition duration-300 ease-in"
					>Source</a
				>
				{#if project.demo != ""}
					<a
						href={`https://github.com/commitsovercoffee/${project.demo}`}
						class="px-2 py-1 bg-zinc-100 border-2 border-zinc-200 rounded-xl hover:border-zinc-900 no-underline transition duration-300 ease-in"
						>Demo</a
					>
				{/if}
			</div>
		{/each}
	</div>
</section>
