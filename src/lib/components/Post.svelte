<script>
	export let posts = [];
</script>

<dl>
	{#each posts as { path, meta }}
		<dt>
			<a
				href={path}
				class="text-xl font-sans underline hover:no-underline decoration-2 underline-offset-2"
			>
				{meta.title}
			</a>
		</dt>
		<dd class="ml-8 text-lg font-serif">{meta.desc}</dd>
		<hr />
	{/each}
</dl>
