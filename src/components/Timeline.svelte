<script>
    let timelineItems = [
        {
            title: 'Happy New Year! 🎉',
            date: 'Jan 2022'
        },
        {
            title: 'Reenrolled as a <a href="https://blackcodher.com/">BlackCodher</a> Mentor',
            description: 'My first mentee has a job in tech now too, awesome!',
            date: 'Dec 2021'
        },
        {
            title: 'Fist volunteered at <a href="https://blackcodher.com/">BlackCodher</a>',
            description: 'I started as a mentor and assistant in sessions, but later instructed the React module.',
            date: 'Aug 2020'
        },
        {
            title: 'Adopted a Tiny Dog',
            description: '<a href="https://www.instagram.com/stories/highlights/17863777871011524/">Ziggy is a Pomeranian.</a>',
            date: 'Aug 2020'
        },
        {
            title: 'Started at <a href="https://www.hotjar.com/">Hotjar</a>',
            description: 'I\'ve worked in 4 teams at Hotjar: Internal tools, The Knowledge Base team, Activation and Business Enablement (where I\'m back doing internal tools - and other stuff).',
            date: 'Nov 2018'
        },
        {
            title: 'Started at <a href="https://teamitg.com/">ITG Group</a>',
            description: 'Back then it was Connect Group Ltd. I worked on the <a href="https://www.landrover.co.uk/offers-and-finance/finance-calculator.html">Jaguar/Land Rover Finance Calculator</a>.',
            date: 'Nov 2018'
        },
        {
            title: 'Married my partner and best friend 🤵‍♂️👰‍♀️',
            date: 'Oct 2017'
        },
        {
            title: 'Started at <a href="https://www.intouchgames.co.uk/">InTouch Games</a>',
            date: 'July 2017'
        },
        {
            title: 'Started at <a href="https://thebusinessdesk.com">TheBusinessDesk.com</a>',
            description: 'I designed and built a brand new site for <a href="https://www.thebusinessdesk.com/">TheBusinessDesk</a>. It was a big responsibility, but I\'m so proud of it (and the fact they\'re still using it!)',
            date: 'Oct 2016'
        },
        {
            title: 'Graduated from University 👨‍🎓',
            description: 'BA Media and Communication at <a href="https://www.bcu.ac.uk/">BCU</a>. Nearly didn\'t get through it. Never been asked about it since. Student debt out my ears.',
            date: 'Sept 2015'
        },
        {
            title: 'First Job in Tech 🥳',
            description: 'I cut my teeth at <a href="https://www.barques.co.uk/">Barques</a> (a French type of ship, since you asked), a digital agency where I worked on sites for a bunch of Birmingham-based companies, like the <a href="https://www.birminghambotanicalgardens.org.uk/">Botanical Gardens</a>. I started the Monday after my final submission deadline.',
            date: 'July 2015'
        },
        {
            title: 'Made my First Website',
            description: 'In my first year at University I made a terrible WordPress site. I\'ve gone to great lengths to expunge it\'s existence from the internet. I also fell in love with coding, learning and making things.',
            date: 'Jan 2013'
        },
        {
            title: 'General Messing About',
            date: 'Aug 94 - Sept 12'
        },
        {
            title: 'Born 🍼',
            description: 'Possibly reincarnated.',
            date: 'Aug 1994'
        }
    ];
</script>

<section style="--columns:{timelineItems}">
    <div class="section-inner">
        <h2>Timeline</h2>

        <div class="timeline">
            {#each timelineItems as item, i}
                <div style="grid-row: {i + 1} / {i + 3}">
                    <div class="timeline-item">    
                        <div class="inner">
                            {#if item.date}
                            <div class="date">{item.date}</div>
                            {/if}
                            <h3>{@html item.title}</h3>
                            {#if item.description}
                            <p>{@html item.description}</p>
                            {/if}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>


<style lang="scss">
    .timeline {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 5rem;
        row-gap: 5rem;
        margin-top: 2rem;
        position: relative;
        padding: 5rem 0;

        @media (max-width: 650px) {
            grid-template-columns: 1fr;
        }
        
        &:before {
            content: '';
            position: absolute;
            width: 1rem;
            height: 100%;
            left: 50%;
            transform: translateX(-50%);
            background: lightgrey;
        }

        > div {
            &:nth-of-type(odd) .timeline-item:after {
                right: -2rem;
            }
            
            &:nth-of-type(even) .timeline-item:after {
                left: -2rem;
            }

            @media (max-width: 650px) {
                grid-row: auto !important;
            }
        }
        
        .timeline-item {
            position: relative;
            background: var(--background-fallback);
            background-image: var(--gradient);
            padding: 1rem;
            border-radius: 1.5rem;

            .inner {
                background: white;
                padding: 1.6rem 2rem;
                border-radius: .6rem;

                h3 {
                    padding-right: 7rem;
                }

                .date {
                    font-size: 1.4rem;
                    float: right;
                }
            }

            @media (max-width: 650px) {
                &:after {
                    display: none;
                }
            }

            &:after {
                content: '';
                position: absolute;
                width: 2rem;
                height: 1rem;
                background: lightgrey;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
</style>