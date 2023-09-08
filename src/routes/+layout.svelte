<script>
	import "../app.css";
	import Nav from "$lib/components/Nav.svelte";
	import Cursor from "$lib/components/Cursor.svelte";
</script>

<svelte:head>
	<title>Commits Over Coffee</title>
</svelte:head>

<Nav />
<Cursor />
<main class="mx-4">
	<slot />
</main>
