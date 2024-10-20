<script lang="ts">
    import { PUBLIC_EMAIL } from '$env/static/public'

    import TopRightArrow from '~icons/material-symbols/arrow-top-right-rounded'
    import EmailIcon from '~icons/material-symbols/alternate-email'

    import aboutData from './data/about.json'
    import techData from './data/tech.json'

    export let avatarUrl
</script>

<div id="about" class="scroll-mt-20 md:scroll-mt-28 mx-12 flex flex-col items-center justify-center">
    <div class="divider text-6xl md:text-[6em] bg-white italic font-light mb-16 md:mb-24">
        {aboutData.title}
    </div>
    <div class="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 lg:gap-12 justify-center items-center px-12 relative max-w-screen-lg">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div class="bg-black ml-12 lg:ml-14 md:p-4 lg:p-6 -skew-x-[22deg] flex justify-center w-fit">
            <img class="mb-4 max-w-[150px] md:max-w-[200px] lg:max-w-[250px] skew-x-[22deg] object-contain" src={avatarUrl} alt="James Reed" />
        </div>
        <div class="flex flex-col justify-center items-center lg:items-start gap-6 md:gap-8">
            <span class="bg-white text-xl md:text-2xl lg:text-4xl">
                {@html aboutData.whoami}
            </span>
            <a href="#projects" class="bg-white flex gap-2 items-center md:text-lg lg:text-xl prose">
                {aboutData.blurb}
                <TopRightArrow style="transform:rotate(90deg);font-size:0.9em;margin-top:4" />
            </a>
            <a href={`mailto:${PUBLIC_EMAIL}`} class="bg-white btn btn-outline w-fit">
                <EmailIcon />
                Contact me
            </a>
        </div>
    </div>
    <div class="flex flex-col items-center gap-6 md:gap-10 mt-4 md:mt-8 lg:mt-16">
        <div class="divider">
            <span class="text-xl md:text-2xl lg:text-4xl italic font-light">{aboutData.techIntro}</span>
        </div>
        <div class="grid grid-flow-row grid-cols-3 md:grid-cols-5 justify-center gap-4">
            {#each techData as tech}
                <div class="bg-white flex gap-2 border rounded-full justify-center text-xs md:text-xl p-2" style="border-color:{tech.color}">
                    {#if tech.iconUrl}
                        <img class="object-scale-down" src={tech.iconUrl} alt={tech.name} />
                    {/if}
                    <span class="hidden lg:flex text-lg">{tech.name}</span>
                </div>
            {/each}
        </div>
    </div>
</div>
