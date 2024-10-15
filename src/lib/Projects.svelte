<script lang="ts">
    import '@splidejs/svelte-splide/css';

    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide'

    import projectData from './data/projects.json'

    projectData.sort((a, b) => a.order - b.order)

    const statusColors: Record<string, string> = {
        wip: 'badge-info',
        complete: 'badge-success',
        incomplete: 'badge-warning',
    }
</script>

<div id="#projects" class="scroll-mt-32 flex flex-col gap-20">
    <div class="divider text-[6em] italic font-light">
        Projects
    </div>
    <Splide hasTrack={false} options={{ pagination: false }}>
        <div>
            <div class="relative top-12 splide__arrows" />
            <SplideTrack>
            {#each projectData as project}
                <SplideSlide>
                    <div class="flex flex-col gap-20 items-center">
                        <div class="flex flex-col gap-6">
                            <div class="flex flex-col gap-4">
                                <div class="flex items-center gap-4">
                                    <a href={project.url} class="link text-5xl font-bold">{project.name}</a>
                                    <span class={`mt-3 badge ${statusColors[project.statusColor]}`}>{project.status}</span>
                                </div>
                                <div class="text-xl">
                                    {project.description}
                                </div>
                            </div>
                            <div class="prose">
                                <ul>
                                    {#each project.info as infoText}
                                        <li>
                                            {@html infoText}
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                            <div class="flex gap-2">
                                {#each project.tech as techName}
                                    <span class="badge">{techName}</span>
                                {/each}
                            </div>
                        </div>
                        <div class="flex justify-center border">
                            <img src={project.imageUrl} class="w-3/4 object-contain" />
                        </div>
                    </div>
                </SplideSlide>
            {/each}
            </SplideTrack>
        </div>
    </Splide>
</div>
