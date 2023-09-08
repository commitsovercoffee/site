<script>
	export let src = "";
	export let comment = "";
	export let name = "";
	const alt = name;
</script>

<div
	class="my-4 h-4/5 flex even:flex-row-reverse border-t-4 border-stone-800 bg-stone-200 shadow-md shadow-stone-300"
>
	<div class="m-0 h-60 shadow-md shadow-stone-300 basis-1/2">
		<img
			loading="lazy"
			{src}
			{alt}
			class="h-full w-full m-0 object-cover bg-stone-400 text-center"
		/>
	</div>

	<div class="basis-2/3 p-4 overflow-y-scroll">
		<div class="p-2 font-sans">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-quote"
				><path
					d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
				/><path
					d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
				/></svg
			>

			<p class="m-0 my-2 py-2">
				{comment}
			</p>

			<p class="m-0 text-right font-semibold">- {name}.</p>
		</div>
	</div>
</div>
