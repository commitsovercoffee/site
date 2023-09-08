<script>
	import { fade } from "svelte/transition";
	import Page from "../../routes/+page.svelte";
	import Prompt from "./Prompt.svelte";
	export let href = "";
	export let title = "Post Title";
</script>

<div
	class="p-2 border-2 border-dashed border-transparent hover:border-stone-800 cursor-pointer transition-color duration-200 ease-in even:bg-stone-200 odd:bg-stone-100 shadow-md shadow-stone-600"
>
	<a {href} class="no-underline" transition:fade>
		<div class="py-4 px-6">
			<p class="my-2 font-black text-3xl">
				{title}
			</p>
			<p class="my-4 text-xl">
				Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Mollitia accusamus blanditiis
				eveniet! Cupiditate, aperiam reprehenderit,
				pariatur voluptatibus nostrum repellendus sequi
				commodi labore asperiores aliquam quae soluta
				cumque blanditiis assumenda dolor!
			</p>
		</div>
	</a>
</div>
