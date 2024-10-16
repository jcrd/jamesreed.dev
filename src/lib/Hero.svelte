<script lang="ts">
    import tilt from 'svelte-tilt'
</script>

<div id="hero" class="h-screen flex flex-col items-center justify-center gap-4 md:gap-6 text-[2em] sm:text-[4em] md:text-[5em]">
    <p class="-ml-[5em] lg:-ml-[7em]">
        You found
    </p>
    <a
        href="#about"
        use:tilt={{
            reverse: true,
            scale: 1.1,
        }}
    >
        <p class="border-4 border-black border-double p-4 md:p-6">
            James Reed
        </p>
    </a>
    <p class="ml-[3em] lg:ml-[5em]">
        on the <span class="italic font-light">internet</span>
    </p>
</div>
