<script lang="ts">
	import { createEventDispatcher } from 'svelte'

    import tilt from 'svelte-tilt'

    import nameCalloutUrl from './graphics/name_callout.svg?url'

	const dispatch = createEventDispatcher<{ scroll: string }>()
</script>

<div id="#hero" class="h-screen flex flex-col items-center justify-center text-[6em]">
    <div class="-ml-[7em] flex gap-6">
        <p class="">
            You found
        </p>
    </div>
    <a
        href="#about"
        on:click={() => dispatch("scroll", "#about")}
        class="pt-8 relative block"
        use:tilt={{
            reverse: true,
            scale: 1.2,
        }}
    >
        <img src={nameCalloutUrl} alt="Trapezoidal design element" />
        <p class="block transform translate-z-[80px] skew-x-[24deg] rotate-[2deg] absolute bottom-[70px] left-[130px] font-semibold">
            James Reed
        </p>
    </a>
    <p class="ml-[4em]">
        on the <span class="italic font-light text-[7rem]">internet</span>
    </p>
</div>
