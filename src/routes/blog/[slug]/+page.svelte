<script lang="ts">
    import type { PageData } from './$houdini';

    export let data: PageData;

    $: ({ Post } = data);
    $: title = $Post.data?.publication?.post?.title
</script>

<article class="flex flex-col items-center gap-16">
    {#if $Post.data?.publication?.post}
        <h1 class="text-5xl font-extrabold pt-16">{title}</h1>
        <img class="max-h-64 object-cover rounded-xl shadow-lg" src={$Post.data.publication?.post?.coverImage?.url} alt={title} />
        <div class="prose">
            {@html $Post.data.publication?.post?.content.html}
        </div>
    {/if}
</article>
