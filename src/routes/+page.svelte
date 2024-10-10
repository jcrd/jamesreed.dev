<script lang="ts">
    import HeroSection from '$lib/HeroSection.svelte'
    import About from '$lib/About.svelte'

    export let data
</script>

<div class="w-full flex flex-col gap-32">
    <HeroSection />
    <About avatarUrl={data.avatarUrl} />
</div>
