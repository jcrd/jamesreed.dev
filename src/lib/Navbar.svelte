<script lang="ts">
    import { page } from '$app/stores'
	import { createEventDispatcher } from 'svelte'

    import { PUBLIC_BLOG_URL } from '$env/static/public'

    import RightArrow from '~icons/material-symbols/arrow-right-alt-rounded'

	const dispatch = createEventDispatcher<{ scroll: string }>()
</script>

<nav class="md:text-xl z-50 navbar w-screen flex justify-center gap-4 bg-white fixed top-0">
    <a
        class="btn btn-ghost"
        class:btn-active={$page.url.hash === "#about"}
        href="#about"
        on:click={() => dispatch("scroll", "#about")}
    >
        About
    </a>
    <a
        class="btn btn-ghost"
        class:btn-active={$page.url.hash === "#projects"}
        href="#projects"
        on:click={() => dispatch("scroll", "#projects")}
    >
        Projects
    </a>
    <a class="btn btn-ghost" href={PUBLIC_BLOG_URL}>
        Blog
        <RightArrow style="margin-top:4" />
    </a>
</nav>
