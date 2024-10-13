<script lang="ts">
    import HeroSection from '$lib/HeroSection.svelte'
    import About from '$lib/About.svelte'
    import Projects from '$lib/Projects.svelte'

    export let data
</script>

<div class="w-full flex flex-col gap-32 pb-32">
    <HeroSection />
    <About avatarUrl={data.avatarUrl} />
    <Projects />
</div>
