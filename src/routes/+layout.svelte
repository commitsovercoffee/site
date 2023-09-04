<script>
	import "../app.css";
	import Nav from "./components/Nav.svelte";

	import { spring } from "svelte/motion";

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.4,
		}
	);

	let size = spring(40);
</script>

<svg
	class="fixed w-full h-full top-0 left-0 z-50"
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY });
	}}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(10)}
>
	<circle
		cx={$coords.x}
		cy={$coords.y}
		r={$size}
		class="fill-current text-teal-600 opacity-40"
	/>
</svg>

<Nav />
<slot />
