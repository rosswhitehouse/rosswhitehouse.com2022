<script>
    let workRows = [
        {
            title: 'Hotjar Internal Tools',
            description: 'Tools for the Support team to use debugging the Hotjar tools on users\' websites, using a Python/Flask REST API.',
            slug: 'hotjar-0',
            techs: ['react', 'css', 'js', 'ts', 'python', 'cicd'],
            url: null
        },
        {
            title: 'Hotjar Knowledge Base',
            description: 'The first point of contact for Hotjar users looking for help.',
            slug: 'hotjar-1',
            techs: ['zendesk', 'html', 'css', 'vue', 'cicd'],
            url: 'https://help.hotjar.com'
        },
        {
            title: 'Hotjar LMS',
            description: 'The Hotjar Customer Education platform for users to learn about the tools.',
            slug: 'hotjar-2',
            techs: ['gatsby', 'css', 'graphql'],
            url: 'https://learning.hotjar.com'
        },
        {
            description: 'Coding Bootcamp for Black Women in the West Midlands to get jobs in tech.',
            slug: 'black-codher',
            techs: ['html', 'css', 'js', 'react', 'node', 'python'],
            title: 'Black Codher',
            url: 'https://blackcodher.com/'
        },
        {
            description: 'The Jaguar / Land Rover Finance Calculator.',
            slug: 'itg',
            techs: ['html', 'css', 'react'],
            title: 'ITG',
            url: 'https://www.landrover.co.uk/offers-and-finance/finance-calculator.html'
        },
        {
            description: 'This site right here was a super fun Astro/Svelte experiment. Turned out ok, right?',
            slug: 'ross-whitehouse',
            techs: ['astro', 'svelte', 'css', 'netlify'],
            title: 'RossWhitehouse.com',
            url: 'https://blackcodher.com/'
        }
    ]
</script>

<section class="work">
    <div class="section-inner">
        <div class="section-heading">
            <h2>Work</h2>
            <p>Here's some of the jobs I've done. Hover for info, click to visit.</p>
        </div>
        <div class="work-wrap">
            {#each workRows as work}
                <div class={`work-item ${work.slug}`}>
                    {#if work.url}
                        <a href={work.url} class="inner">
                            <div>
                                <h3>{work.title}</h3>
                                <p>{work.description}</p>
                            </div>
                            <div>
                                <div class="icons">
                                    {#each work.techs as tech}
                                    <img src={`/assets/img/${tech}.png`} alt="">
                                    {/each}
                                </div>
                                <div class="button">Visit Site</div>
                            </div>
                        </a>
                    {:else}
                        <div class="inner">
                            <div>
                                <h3>{work.title}</h3>
                                <p>{work.description}</p>
                            </div>
                            <div>
                                <div class="icons">
                                    {#each work.techs as tech}
                                    <img src={`/assets/img/${tech}.png`} alt="">
                                    {/each}
                                </div>
                            </div>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    section.work {	
        --margin: 35rem;
        margin-bottom: var(--margin);

        .work-wrap {
            background: var(--background-fallback);
            background: var(--gradient);
            padding: 1rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 1rem;
            row-gap: 1rem;
            border-radius: 1.5rem;
            margin-bottom: calc(var(--margin) * -1 - 12rem);
            color: black;
            
            @media(max-width: 960px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media(max-width: 650px) {
                grid-template-columns: 1fr;
            }
            
            .work-item {
                height: 20rem;
                background-color: white;
                background-size: 80%;
                background-repeat: no-repeat;
                background-position: center;

                .inner {
                    background: white;
                    opacity: 0;
                    transition: opacity 0.3s ease-in;
                    display: block;
                    height: 100%;
                    padding: 1.6rem 2rem 1.8rem;
                    text-decoration: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    @media (hover:none), (pointer: coarse) {
                        opacity: 1;
                    }
                }

                h3 {
                    font-size: 1.8rem;
                    margin-bottom: 0.6rem;
                }

                p {
                    font-size: 1.6rem;
                }

                .button {
                    margin-top: 1.4rem;
                    display: inline-block;
                }

                .icons {
                    display: flex;

                    img {
                        height: 2.4rem;
                        width: auto;
                        margin-right: 1rem;
                    }
                }

                &:hover {
                    background-image: none !important;
                    background: transparent;

                    > * {
                        opacity: 1;
                    }
                }

                &.hotjar-0,
                &.hotjar-1,
                &.hotjar-2 {
                    background-size: auto 30%;
                }

                &.hotjar-0 {
                    background-image: url('/assets/img/hjit.png');
                    border-top-left-radius: .6rem;
                }
                
                &.hotjar-1 {
                    background-image: url('/assets/img/hjkb.png');
                }
                
                &.hotjar-2 {
                    background-image: url('/assets/img/hjlms.png');
                    border-top-right-radius: .6rem;
                }
                
                &.black-codher {
                    background-image: url('/assets/img/black-codher.png');
                    background-size: 70%;
                    border-bottom-left-radius: .6rem;
                }
                
                &.itg {
                    background-image: url('/assets/img/itg.png');
                    background-size: 60%;
                }
                
                &.ross-whitehouse {
                    background-image: url('/assets/img/ross-whitehouse.png');
                    border-bottom-right-radius: .6rem;
                }
            }
        }
    }
</style>