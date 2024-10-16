<script lang="ts">
    import { page } from '$app/stores'

    import Hero from '$lib/Hero.svelte'
    import About from '$lib/About.svelte'
    import Projects from '$lib/Projects.svelte'

    export let data

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
    <title>James Reed on the internet</title>
</svelte:head>

<div class="flex flex-col gap-24 md:gap-32">
    <Hero />
    <About avatarUrl={data.avatarUrl} />
    <Projects />
</div>
