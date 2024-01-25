<script>
    let techs = {
        0: ['HTML', 'CSS', 'JavaScript', 'Node/Express'],
        1: ['React', 'SCSS', 'Gatsby', 'GraphQL', 'Vue', 'Figma', 'Python', 'Zendesk', 'CI/CD', 'Testing Library', 'Serverless', 'Netlify'],
        2: ['Svelte', 'Astro', 'Heroku', 'TypeScript']
    }
</script>

<section class="techs">
    <div class="section-inner">
        <div class="section-heading">
            <h2>Tech</h2>
            <p>Code and stuff.</p>
        </div>

        <h3>I love these:</h3>
        <div class="tech-wrapper">
            {#each techs[0] as tech}
                <div class="tech"><div class="inner">{tech}</div></div>
            {/each}
        </div>

        <h3>I've worked with these:</h3>
        <div class="tech-wrapper">
            {#each techs[1] as tech}
                <div class="tech"><div class="inner">{tech}</div></div>
            {/each}
        </div>

        <h3>Dabbled with these:</h3>
        <div class="tech-wrapper">
            {#each techs[2] as tech}
                <div class="tech"><div class="inner">{tech}</div></div>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    section.techs {
        text-align: center;

        h3 {
            font-size: 2rem;
            margin: 4rem 0 2rem;
        }
        
        .tech-wrapper {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            row-gap: 2rem;
            justify-items: center;

            @media(max-width: 960px) {
                grid-template-columns: repeat(2, 1fr);
            }
            
            @media(max-width: 440px) {
                grid-template-columns: 1fr;
            }
        }
        
        .tech {
            background: var(--background-fallback);
            background: var(--gradient);
            min-width: 200px;
            width: 80%;
            padding: 1rem;
            text-align: center;
            border-radius: 1.5rem;
            
            .inner {
                padding: 1rem 2rem;
                background: white;
                border-radius: .6rem;
            }
        }
    }
</style>