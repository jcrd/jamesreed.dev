<script lang="ts">
    import { PUBLIC_BLOG_URL, PUBLIC_GITHUB_PROFILE_URL } from '$env/static/public'

    import RightArrow from '~icons/material-symbols/arrow-right-alt-rounded'

    import projectData from './data/projects.json'
    import iconData from './data/icons.json'

    projectData.sort((a, b) => a.order - b.order)

    const statusColors: Record<string, string> = {
        wip: 'badge-info',
        complete: 'badge-success',
        incomplete: 'badge-warning',
    }
</script>

<div id="projects" class="scroll-mt-20 md:scroll-mt-28 mx-12 flex flex-col items-center">
    <div class="divider text-6xl md:text-[6em] italic font-light mb-8 md:mb-24">
        Projects
    </div>
    <div class="flex flex-col max-w-screen-sm md:max-w-screen-lg">
        {#each projectData as project, idx}
            <div class={`flex gap-8 ${idx % 2 ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'} rounded-2xl p-8`}>
                <div class="flex flex-col gap-6 justify-center">
                    <a href={project.url} class="w-max flex gap-2 items-center">
                        <span class="text-4xl md:text-5xl font-bold">{project.name}</span>
                        <RightArrow style="font-size:1.75em;margin-top:8"/>
                    </a>
                    <div class="text-xl">
                        {project.description}
                    </div>
                    <div class="flex gap-2 flex-wrap">
                        {#each project.tech as techName}
                            <span class="badge">{techName}</span>
                        {/each}
                    </div>
                </div>
                <a href={project.url} class="w-full relative">
                    <div class={`${idx % 2 ? 'left-4' : 'right-4'} flex gap-2 text-lg p-3 badge absolute top-4`}>
                        <span class={`${statusColors[project.statusColor]} badge badge-xs`}></span>
                        {project.status}
                    </div>
                    <img src={project.imageUrl} class={`${idx % 2 ? 'rounded-l-2xl' : 'rounded-r-2xl'} border-2 border-black object-cover`} alt={project.name} />
                </a>
            </div>
            {#if idx < projectData.length - 1}
                <span class="divider mx-8"></span>
            {/if}
        {/each}
    </div>
    <div class="flex flex-col sm:flex-row gap-2 sm:h-12 mt-12">
        <a href={PUBLIC_GITHUB_PROFILE_URL} class="flex gap-2 items-center text-2xl font-semibold">
            <RightArrow style="transform:rotate(180deg)" />
            <img src={iconData.github} alt="GitHub icon" />
            Find more
        </a>
        <span class="divider sm:divider-horizontal text-gray-700"></span>
        <a href={PUBLIC_BLOG_URL} class="flex gap-2 items-center text-2xl font-semibold">
            Read more
            <img src={iconData.blog} alt="Blog icon" />
            <RightArrow style="" />
        </a>
    </div>
</div>
