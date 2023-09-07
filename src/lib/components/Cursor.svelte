<script>
	import { spring } from "svelte/motion";

	let coords = spring(
		{ x: -500, y: 50 },
		{
			stiffness: 0.1,
			damping: 0.4,
		}
	);

	let size = spring(20);
</script>

<svelte:window
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY });
	}}
	on:mousedown={() => size.set(40)}
	on:mouseup={() => size.set(20)}
/>
