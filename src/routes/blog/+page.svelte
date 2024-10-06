<script lang="ts">
    import PostCard from '$lib/PostCard.svelte'

    import type { PageData } from './$houdini';

    export let data: PageData;

    $: ({ BlogPage } = data);
</script>

<div class="h-screen grid grid-cols-2 gap-4">
    {#if $BlogPage.data?.publication?.posts}
        {#each $BlogPage.data.publication.posts.edges as { node: post }, i}
            <PostCard {post} />
        {/each}
    {/if}
</div>
