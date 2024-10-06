<script lang="ts">
    import HeroSection from '$lib/HeroSection.svelte'
    import BlogPreview from '$lib/BlogPreview.svelte'

    export let data
</script>

<div class="">
    <HeroSection />
    <BlogPreview postPreview={data.blogPreview} />
</div>
