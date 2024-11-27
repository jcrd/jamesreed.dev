<script lang="ts">
    import { page } from '$app/stores'

    import Hero from '$lib/Hero.svelte'
    import Portfolio from '$lib/Portfolio.svelte'

    $: if ($page.url.hash) {
        scrollToHash($page.url.hash)
    }

    function scrollToHash(hash: string) {
        const el = document.getElementById(hash.slice(1))
        if (el) {
            el.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }
</script>

<svelte:head>
    <title>James Reed</title>
</svelte:head>

<div class="flex flex-col gap-24 md:gap-32">
    <Hero />
    <Portfolio />
</div>
