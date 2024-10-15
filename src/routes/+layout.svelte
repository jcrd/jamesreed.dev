<script>
	import '../app.css'

	import Navbar from '$lib/Navbar.svelte';
</script>

<main class="flex flex-col">
	<Navbar />
	<div class="max-w-screen-2xl mx-auto">
		<slot></slot>
	</div>
</main>
