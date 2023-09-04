<script>
	import { onMount } from "svelte";

	export const messages = [
		"Tick-tock, app o'clock! Let's start building your dream.",
		"No more 'someday.' Today's the day for your app to shine.",
		"The app train is leaving the station; hop on board!",
		"In coding, we trust - but we also test, just in case.",
		"Why dream it when you can build it? Let's get started!",
		"Don't just think it; let's ink it! Your app, our expertise.",
		"I use arch btw.",
	];

	let i = -1;

	onMount(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 5000);

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

<div class="inline">
	{#key i}
		<span
			class="font-serif italic text-xl"
			in:typewriter={{ speed: 7 }}
		>
			{messages[i] || ""}
		</span>
	{/key}
</div>
