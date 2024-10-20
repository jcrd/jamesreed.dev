<script lang="ts">
    import { page } from '$app/stores'

    import { PUBLIC_BLOG_URL, PUBLIC_EMAIL } from '$env/static/public'

    import RightArrow from '~icons/material-symbols/arrow-right-alt-rounded'
    import EmailIcon from '~icons/material-symbols/alternate-email'
</script>

<nav class="z-50 navbar w-screen flex justify-center sm:gap-4 bg-white fixed top-0">
    <a
        href="#about"
        class="sm:text-lg md:text-xl lg:text-2xl btn btn-sm sm:btn-md btn-ghost"
        class:btn-active={$page.url.hash === "#about"}
    >
        About
    </a>
    <a
        href="#projects"
        class="sm:text-lg md:text-xl lg:text-2xl btn btn-sm sm:btn-md btn-ghost"
        class:btn-active={$page.url.hash === "#projects"}
    >
        Projects
    </a>
    <a class="sm:text-lg md:text-xl lg:text-2xl btn btn-sm sm:btn-md btn-ghost" href={`mailto:${PUBLIC_EMAIL}`}>
        <EmailIcon />
        Contact
    </a>
    <a class="sm:text-lg md:text-xl lg:text-2xl btn btn-sm sm:btn-md btn-ghost" href={PUBLIC_BLOG_URL}>
        Blog
        <RightArrow style="" />
    </a>
</nav>
