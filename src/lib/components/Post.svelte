<script>
	export let posts = [];
</script>

<dl>
	{#each posts as { path, meta }}
		<dt>
			<a
				href={path}
				class="text-xl text-neutral-200 font-playfair underline hover:no-underline decoration-2 underline-offset-4"
			>
				{meta.title}
			</a>
		</dt>
		<dd class="ml-8 font-plex_sans">{meta.desc}</dd>
		<hr />
	{/each}
</dl>
