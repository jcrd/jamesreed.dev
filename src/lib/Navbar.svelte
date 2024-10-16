<script lang="ts">
    import { page } from '$app/stores'

    import RightArrow from '~icons/material-symbols/arrow-right-alt-rounded'

    import { BLOG_URL } from './data/urls.json'
</script>

<nav class="md:text-xl z-50 navbar w-screen flex justify-center gap-4 bg-white fixed top-0">
    <a
        href="#about"
        class="btn btn-ghost"
        class:btn-active={$page.url.hash === "#about"}
    >
        About
    </a>
    <a
        href="#projects"
        class="btn btn-ghost"
        class:btn-active={$page.url.hash === "#projects"}
    >
        Projects
    </a>
    <a class="btn btn-ghost" href={BLOG_URL}>
        Blog
        <RightArrow style="margin-top:4" />
    </a>
</nav>
