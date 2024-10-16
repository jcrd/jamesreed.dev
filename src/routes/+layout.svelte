<script>
	import '../app.css'

	import Navbar from '$lib/Navbar.svelte';
</script>

<main class="flex flex-col overflow-auto">
	<Navbar />
	<div class="lg:max-w-screen-2xl lg:mx-auto">
		<slot></slot>
	</div>
	<footer class="flex justify-center gap-1 text-gray-700 pt-24 pb-16">
		©
		{new Date().getFullYear()}
		James Reed
	</footer>
</main>
