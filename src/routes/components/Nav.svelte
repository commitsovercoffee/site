<script>
	let navlinks = ["Home", "Projects", "Blogs", "About"];
</script>

<div class="mt-8 rounded-xl w-full bg-slate-200">
	<div class="px-2 flex justify-self-start items-end">
		<img class="m-2 p-2 h-16" src="/favicon.png" alt="" />
		<h2 class="m-2 p-2 font-light italic font-serif text-3xl">
			Commits Over Coffee
		</h2>
	</div>
	<div class=" flex justify-start">
		<div class="m-2 flex justify-evenly">
			{#each navlinks as link}
				<a
					href="/"
					class="font-mono uppercase no-underline rounded-xl px-4 m-2 hover:bg-slate-800 hover:text-slate-200 transition duration-200 ease-in-out delay-50"
					>{link}</a
				>
			{/each}
		</div>
	</div>
</div>
