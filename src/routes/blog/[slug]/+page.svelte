<script>
	export let data;
</script>

<div class="flex">
	{#each data.post.tags as tag}
		<a class="p-2 m-2 border-2 border-slate-400" href="">{tag}</a>
	{/each}
</div>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
