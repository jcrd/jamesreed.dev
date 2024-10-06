<script>
    import PostCard from '$lib/PostCard.svelte'

    import MaterialSymbolsChevronRightRounded from '~icons/material-symbols/chevron-right-rounded'

    export let postPreview
</script>

<div class="h-screen grid grid-cols-2 gap-4">
    {#if postPreview?.publication?.posts}
        {#each postPreview.publication.posts.edges as { node: post }, i}
            <div class:-mt-48={i === 3}>
                {#if i === 0}
                    <div class="h-48">
                        <a href="/blog" class="hover:underline text-8xl font-bold">
                            Blog
                        </a>
                    </div>
                {/if}
                <PostCard {post} />
                {#if i === 3}
                    <div class="pt-24 flex justify-end">
                        <a href="/blog" class="hover:underline flex text-3xl font-semibold">
                            <span>
                                Read more
                            </span>
                            <div class="mt-[3px]">
                                <MaterialSymbolsChevronRightRounded />
                            </div>
                        </a>
                    </div>
                {/if}
            </div>
        {/each}
    {/if}
</div>
