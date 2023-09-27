<script>
	import "../app.css";
	import Nav from "$lib/components/Nav.svelte";
	import Cursor from "$lib/components/Cursor.svelte";

	// fonts
	import "@fontsource/ibm-plex-serif";
	import "@fontsource/ibm-plex-sans";
	import "@fontsource/ibm-plex-mono";
	import "@fontsource-variable/caveat";
</script>

<svelte:head>
	<title>Commits Over Coffee</title>
</svelte:head>

<Nav />
<main class="my-16 md:my-32 mx-4 p-2 text-neutral-300 font-plex_sans">
	<slot />
</main>
