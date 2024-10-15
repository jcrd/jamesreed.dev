<script lang="ts">
    import { page } from '$app/stores'

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
    <button class="text-xl btn btn-ghost" on:click={updateHash("#about")}>About</button>
    <button class="text-xl btn btn-ghost" on:click={updateHash("#projects")}>Projects</button>
</nav>
