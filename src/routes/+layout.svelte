<script>
	import "../app.css";
	import Nav from "$lib/components/Nav.svelte";
	import Cursor from "$lib/components/Cursor.svelte";
</script>

<svelte:head>
	<title>Commits Over Coffee</title>
</svelte:head>

<Cursor />
<Nav />
<main class="my-16 md:my-32 mx-4 p-2">
	<slot />
</main>
