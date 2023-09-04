<script>
	let navlinks = ["home", "projects", "blog", "about"];
</script>

<div class="mt-2 rounded-xl w-full">
	<div class="px-2 flex justify-self-start items-end">
		<a href="/" class="no-underline flex">
			<img class="m-0 p-2 h-12" src="/favicon.png" alt="" />
			<h2
				class="m-0 p-2 font-light italic font-serif text-3xl"
			>
				Commits Over Coffee
			</h2>
		</a>
	</div>
	<div class=" flex justify-start">
		<div class="m-2 flex justify-evenly">
			{#each navlinks as link}
				<a
					href={link === "home"
						? "/"
						: `/${link}`}
					class="font-mono uppercase no-underline rounded-xl px-4 m-2 hover:bg-slate-800 hover:text-slate-200 transition duration-200 ease-in-out delay-50"
					>{link}</a
				>
			{/each}
		</div>
	</div>
</div>
