<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    import TopRightArrow from '~icons/material-symbols/arrow-top-right-rounded'

    import aboutData from './data/about.json'
    import techData from './data/tech.json'

    export let avatarUrl

	const dispatch = createEventDispatcher<{ scroll: string }>()
</script>

<div id="#about" class="h-screen scroll-mt-32 w-full p-24 border-2 border-black relative flex flex-col items-center justify-center gap-24">
    <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="text-[6em] absolute -top-20 bg-white italic font-light -ml-[7em] pr-4">
        {aboutData.title}
    </div>
    <div class="grid grid-cols-2 px-24">
        <div class="bg-black w-fit p-8 -skew-x-[22deg]">
            <img width={300} class="skew-x-[22deg]" src={avatarUrl} alt="James Reed" />
        </div>
        <div class="bg-white flex flex-col justify-center gap-8">
            <span class="text-4xl">
                {@html aboutData.whoami}
            </span>
            <a href="#projects" on:click={() => dispatch("scroll", "#projects")} class="flex gap-2 items-center text-xl prose">
                {aboutData.blurb}
                <TopRightArrow style="transform:rotate(90deg);font-size:0.9em;margin-top:4" />
            </a>
        </div>
    </div>
    <div class="w-full flex flex-col items-center gap-14">
        <div class="divider bg-white">
            <span class="bg-white text-4xl italic font-light">{aboutData.techIntro}</span>
        </div>
        <div class="w-3/4 grid grid-flow-col grid-rows-3 justify-center gap-4">
            {#each techData as tech}
                <div class="bg-white flex gap-2 border rounded-full justify-center p-2" style="border-color:{tech.color}">
                    {#if tech.iconUrl}
                        <img src={tech.iconUrl} alt={tech.name} />
                    {/if}
                    <span>{tech.name}</span>
                </div>
            {/each}
        </div>
    </div>
</div>
