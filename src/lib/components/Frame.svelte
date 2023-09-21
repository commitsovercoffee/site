<script>
	import { onDestroy } from "svelte";

	// Use only square images.
	export let alt = "Image Desc";

	export const photos = [
		{
			alt: "Image 1",
			src: `https://picsum.photos/192?random=1`,
		},
		{
			alt: "Image 2",
			src: `https://picsum.photos/192?random=2`,
		},
		{
			alt: "Image 3",
			src: `https://picsum.photos/192?random=3`,
		},
		{
			alt: "Image 4",
			src: `https://picsum.photos/192?random=4`,
		},
	];

	let currentImageIndex = 0;
	let src = photos[currentImageIndex].src;

	// Function to update the image source every 5 seconds.
	const changeImage = () => {
		currentImageIndex = (currentImageIndex + 1) % photos.length;
		src = photos[currentImageIndex].src;
	};

	// Set an interval to change the image every 5 seconds.
	const interval = setInterval(changeImage, 5000);

	// Cleanup the interval when the component is destroyed.
	onDestroy(() => clearInterval(interval));
</script>

<img
	loading="lazy"
	{src}
	{alt}
	class="h-48 md:h-72 w-48 md:w-72 bg-stone-300 my-16 mx-auto rounded-full p-2 border-2 border-stone-800 object-cover shadow-md shadow-stone-600"
/>
