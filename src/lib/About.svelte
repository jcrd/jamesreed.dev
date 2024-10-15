<script>
    import aboutData from './data/about.json'
    import techData from './data/tech.json'

    export let avatarUrl
</script>

<div id="#about" class="scroll-mt-32 w-full p-24 border-2 border-black relative flex flex-col items-center justify-center gap-24">
    <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="text-[6em] absolute -top-20 bg-white italic font-light -ml-[7em] pr-4">
        {aboutData.title}
    </div>
    <div class="grid grid-cols-2 px-24">
        <div class="bg-black w-fit p-8 -skew-x-[22deg]">
            <img width={300} class="skew-x-[22deg]" src={avatarUrl} />
        </div>
        <div class="bg-white flex flex-col justify-center gap-4">
            <span class="text-4xl">
                {@html aboutData.whoami}
            </span>
            <span class="text-xl prose">
                {aboutData.blurb}
            </span>
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
                        <img src={tech.iconUrl} />
                    {/if}
                    <span>{tech.name}</span>
                </div>
            {/each}
        </div>
    </div>
</div>
