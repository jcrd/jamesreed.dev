<script>
	import '../app.css'

    import Footer from '$lib/Footer.svelte'
</script>

<main class="scroll-smooth flex flex-col overflow-auto">
	<div class="lg:max-w-screen-2xl lg:mx-auto">
		<slot></slot>
	</div>
	<Footer />
</main>
