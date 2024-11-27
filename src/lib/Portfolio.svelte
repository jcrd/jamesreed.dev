<script lang="ts">
    import projectData from './data/portfolio.json'

    projectData.sort((a, b) => a.order - b.order)

    const statusColors: Record<string, string> = {
        wip: 'badge-info',
        complete: 'badge-success',
        incomplete: 'badge-warning',
    }
</script>

<div id="portfolio" class="scroll-mt-8 mx-12 flex flex-col items-center">
    <div class="divider mb-8 md:mb-24">
        <div class="text-6xl md:text-[6em] italic font-light bg-primary -skew-x-[22deg] pl-2 pr-6">
            <div class="text-primary-content skew-x-[22deg]">
                Portfolio
            </div>
        </div>
    </div>
    <div class="flex flex-col max-w-screen-sm md:max-w-screen-lg">
        {#each projectData as project, idx}
            <div class={`flex gap-8 ${idx % 2 ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'} rounded-2xl p-8`}>
                <div class="flex flex-col gap-6 justify-center">
                    <a href={project.url} class="w-max flex gap-2 items-center">
                        <span class="text-4xl md:text-5xl font-bold">{project.name}</span>
                    </a>
                    <div class="text-xl">
                        {project.description}
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
</div>
