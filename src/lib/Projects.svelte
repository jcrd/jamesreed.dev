<script lang="ts">
    import RightArrow from '~icons/material-symbols/arrow-right-alt-rounded'

    import projectData from './data/projects.json'

    projectData.sort((a, b) => a.order - b.order)

    const statusColors: Record<string, string> = {
        wip: 'badge-info',
        complete: 'badge-success',
        incomplete: 'badge-warning',
    }
</script>

<div id="#projects" class="scroll-mt-32 w-full flex flex-col items-center gap-20">
    <div class="divider text-[6em] italic font-light">
        Projects
    </div>
    <div class="flex flex-col w-full max-w-screen-lg gap-x-8 gap-y-12">
        {#each projectData as project, idx}
        <div class={`flex gap-8 ${idx % 2 ? 'flex-row-reverse' : 'flex-row'} rounded-2xl p-8`}>
            <div class="flex flex-col gap-6 justify-center">
                <div class="flex gap-2 items-center">
                    <a href={project.url} class="text-5xl font-bold">{project.name}</a>
                    <RightArrow style="font-size:1.75em;margin-top:14"/>
                </div>
                <div class="text-xl">
                    {project.description}
                </div>
                <div class="flex gap-2 flex-wrap">
                    {#each project.tech as techName}
                        <span class="badge">{techName}</span>
                    {/each}
                </div>
            </div>
            <span class="py-20 divider divider-horizontal"></span>
            <a href={project.url} class="w-full relative">
                <div class={`${idx % 2 ? 'left-4' : 'right-4'} flex gap-2 text-lg p-3 badge absolute top-4`}>
                    <span class={`${statusColors[project.statusColor]} badge badge-xs`}></span>
                    {project.status}
                </div>
                <img src={project.imageUrl} class={`${idx % 2 ? 'rounded-l-2xl' : 'rounded-r-2xl'} border-2 border-black object-cover`} />
            </a>
        </div>
        {/each}
    </div>
</div>
