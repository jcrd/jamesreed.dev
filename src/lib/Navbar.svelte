<script lang="ts">
    import { page } from '$app/stores'

    import { PUBLIC_BLOG_URL } from '$env/static/public'

    import RightArrow from '~icons/material-symbols/arrow-right-alt-rounded'
</script>

<nav class="z-50 navbar w-screen flex justify-center gap-4 bg-white fixed top-0">
    <a
        href="#about"
        class="sm:text-lg md:text-xl lg:text-2xl btn btn-ghost"
        class:btn-active={$page.url.hash === "#about"}
    >
        About
    </a>
    <a
        href="#projects"
        class="sm:text-lg md:text-xl lg:text-2xl btn btn-ghost"
        class:btn-active={$page.url.hash === "#projects"}
    >
        Projects
    </a>
    <a class="sm:text-lg md:text-xl lg:text-2xl btn btn-ghost" href={PUBLIC_BLOG_URL}>
        Blog
        <RightArrow style="" />
    </a>
</nav>
