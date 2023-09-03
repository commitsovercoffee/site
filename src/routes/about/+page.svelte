<script>
	import Title from "../components/Title.svelte";
	let photos = [
		{
			id: 1,
			src: "https://via.placeholder.com/200",
			alt: "Photo 1",
		},
		{
			id: 2,
			src: "https://via.placeholder.com/200",
			alt: "Photo 2",
		},
		{
			id: 3,
			src: "https://via.placeholder.com/200",
			alt: "Photo 3",
		},
		{
			id: 4,
			src: "https://via.placeholder.com/200x300",
			alt: "Photo 4",
		},
	];
</script>

<section class="p-4">
	<Title>ABout Me</Title>

	<section class="flex flex-wrap justify-center">
		{#each photos as photo}
			<div
				class="h-min m-2 p-0 shadow-lg odd:-rotate-2 even:rotate-2"
			>
				<img
					alt={photo.alt}
					src={photo.src}
					class="m-0 p-4 w-[200px] h-auto transition-all duration-200 ease-linear delay-150"
				/>
			</div>
		{/each}
	</section>

	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
		id maiores cum inventore, non vel dolore ipsum facere, animi
		vero velit! Incidunt delectus aspernatur similique sit. Ea
		delectus quo dignissimos.
	</p>

	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
		id maiores cum inventore, non vel dolore ipsum facere, animi
		vero velit! Incidunt delectus aspernatur similique sit. Ea
		delectus quo dignissimos. Lorem ipsum dolor sit amet,
		consectetur adipisicing elit. Culpa velit perspiciatis suscipit,
		laboriosam adipisci obcaecati et eius quisquam magni dignissimos
		animi totam aliquam architecto facere accusamus rem cum corrupti
		neque.
	</p>

	<Title>Random Facts</Title>

	<ul>
		<li>I built my first game using macromedia flash.</li>
		<li>I love strategy games and competitive MOBAs.</li>
		<li>I'm learning svelte and loving it!</li>
		<li>I moved from vim-wiki to spreadsheets.</li>
		<li>In an alternate life, I would've been a drummer.</li>
	</ul>

	<Title>Favorites</Title>

	<ul>
		<li>
			<strong>Music</strong> : A-ha, Abba, Baltimore, Guns N Roses,
			John Mayer, Joji, Led Zepplin, Queen and The Police.
		</li>
		<li>
			<strong>Shows</strong> : The Silicon Valley, The Office,
			My Name is Earl and Rick and Morty.
		</li>
		<li>
			<strong>Movies</strong> : Mission Impossible, Clockwork Orange,
			The Dark Knight and Malena.
		</li>
		<li>
			<strong>Books</strong> : 1984, Brave New World, Man and his
			Symbols, Of Men and Mice, Crime and Punishment and Don Quixote.
		</li>
		<li>
			<strong>Games</strong> : Dota 2, The Witcher, Assasin's Creed,
			God of War, Portal, Tomb Raider, Hitman and Inside.
		</li>
	</ul>

	<Title>Contact</Title>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Commodi, ab expedita accusamus fuga fugit enim excepturi itaque,
		atque illum ea in quia dolorum sunt qui, error nesciunt saepe
		mollitia iusto.
	</p>
</section>
