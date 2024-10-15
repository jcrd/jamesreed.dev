<script lang="ts">
    import { page } from '$app/stores'
    import { PUBLIC_BLOG_URL } from '$env/static/public';

    import RightArrow from '~icons/material-symbols/arrow-right-alt-rounded'

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

    function updateHash(hash: string) {
        return () => {
            location.hash = hash
            scrollToHash(hash)
        }
    }
</script>

<nav class="z-50 navbar flex justify-center gap-4 bg-white fixed top-0">
    <button
        class="text-xl btn btn-ghost"
        class:btn-active={$page.url.hash === "#about"}
        on:click={updateHash("#about")}
    >
        About
    </button>
    <button
        class="text-xl btn btn-ghost"
        class:btn-active={$page.url.hash === "#projects"}
        on:click={updateHash("#projects")}
    >
        Projects
    </button>
    <a class="text-xl btn btn-ghost" href={PUBLIC_BLOG_URL}>
        Blog
        <RightArrow style="margin-top:4"/>
    </a>
</nav>
