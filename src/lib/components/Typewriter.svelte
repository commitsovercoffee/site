<script>
	import { onMount } from "svelte";

	export let messages = ["message 1", "message 2", "message 3"];

	let i = -1;

	onMount(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	});

	function typewriter(node, { speed = 1 }) {
		const valid =
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(
				`This transition only works on elements with a single text node child`
			);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			},
		};
	}
</script>

<div class="m-0 h-16 font-plex_sans font-semibold">
	{#key i}
		<p in:typewriter={{ speed: 7 }}>
			{messages[i] || ""}
		</p>
	{/key}
</div>
