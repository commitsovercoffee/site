<script>
	export let src = "";
	export let alt = "";
</script>

<div
	class="m-0 p-2 h-4/5 w-full border-2 border-stone-800 shadow-md shadow-stone-400"
>
	<img
		{src}
		{alt}
		loading="lazy"
		class="h-full w-full m-0 object-cover bg-stone-200 text-center"
	/>
</div>
