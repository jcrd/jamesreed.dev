<script lang="ts">
    import { page } from '$app/stores'

    import Hero from '$lib/Hero.svelte'
    import About from '$lib/About.svelte'
    import Projects from '$lib/Projects.svelte'

    export let data

    $: scrollToHash($page.url.hash)

    function scrollToHash(hash: string) {
        if (!hash) {
            return
        }
        const el = document.getElementById(hash)
        if (!el) {
            return
        }
        el.scrollIntoView({
            behavior: 'smooth',
        })
    }

    function handleScrollEvent(event: CustomEvent<string>) {
        scrollToHash(event.detail)
    }
</script>

<svelte:head>
    <title>James Reed on the internet</title>
</svelte:head>

<div class="w-full flex flex-col gap-32">
    <Hero on:scroll={handleScrollEvent} />
    <About on:scroll={handleScrollEvent} avatarUrl={data.avatarUrl} />
    <Projects on:scroll={handleScrollEvent} />
</div>
