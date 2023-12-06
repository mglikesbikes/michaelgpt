<script lang="ts">
  const actions = [
    {
      href: 'mailto:michael@pocketrides.cc',
      icon: 'gmail',
      text: `Let's talk`
    },
    {
      href: 'https://www.linkedin.com/in/michaelgriffith3/',
      icon: 'linkedin',
      text: `Follow me`
    },
    // {
    //   href: '#',
    //   icon: 'youtube',
    //   text: `How I made this`
    // },
    {
      href: 'https://github.com/mglikesbikes/michaelgpt',
      icon: 'github',
      text: `View source`
    }
  ];
</script>

<article data-flex="v" data-gap="lg">
  <div>
    <h2 data-header>What is this?</h2>
    <div data-flex="v" data-gap>
      <p>
        My name is Michael, and I’m a full-stack engineer & lead front-end
        developer. I made this AI chatbot based on my resumé to help you get to
        know me.
      </p>
    </div>
  </div>
  <ul data-flex="v as" data-gap>
    {#each actions as action}
      <li>
        <a href={action.href} data-header data-flex="ac" data-gap>
          <img src="/icon-{action.icon}.jpg" aria-hidden alt="" />
          {@html action.text}
        </a>
      </li>
    {/each}
  </ul>
</article>

<style lang="scss">
  article {
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  a {
    color: #000;
    text-decoration: none;
    font-size: 1.125rem;

    img {
      width: 42px;
    }
  }

  // small {
  //   font-size: 11px;
  //   color: var(--light-gray);
  // }
</style>
