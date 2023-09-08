<script>
	let navlinks = ["home", "projects", "blog", "about"];
</script>

<div class="mt-8 mb-16">
	<a href="/" class="p-2 no-underline flex align-bottom">
		<img class="m-0 p-2 h-16" src="/favicon.png" alt="" />
		<p class="m-0 p-2 pt-4 italic font-serif text-4xl">
			Commits Over Coffee
		</p>
	</a>
	<div class=" flex">
		<div class="m-2 flex flex-wrap">
			{#each navlinks as link}
				<a
					href={link === "home"
						? "/"
						: `/${link}`}
					class="m-2 py-2 px-4 font-black uppercase no-underline rounded-xl border-2 border-stone-200 hover:bg-stone-800 hover:prose hover:prose-invert transition-color duration-200 ease-in-out delay-50"
				>
					{link}
				</a>
			{/each}
		</div>
	</div>
</div>
