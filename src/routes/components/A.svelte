<script>
	/**
	 * The label text for the link.
	 *
	 * @type {string}
	 * @default "[insert url label]"
	 */
	export let label = "[insert link]";

	/**
	 * The URL to navigate to when the link is clicked.
	 *
	 * @type {string}
	 * @default "/"
	 */
	export let link = "/";
</script>

<a
	class="hover:bg-teal-300 transition-all duration-200 underline-offset-4"
	href={link}
	>{label}
</a>
