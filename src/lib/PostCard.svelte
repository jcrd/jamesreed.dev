<script>
    export let post

    $: ({ slug, title, coverImage, brief } = post)
</script>

<div class="p-6 rounded-lg shadow-sm">
    <a href={`/blog/${slug}`}>
        <h2 class="text-balance text-xl pb-5 font-semibold">{title}</h2>
        <div class="flex flex-col">
            <img class="max-h-64 object-cover rounded-xl shadow-lg" src={coverImage?.url} alt={title} />
            <p class="my-4 indent-8">{brief}</p>
        </div>
    </a>
</div>
