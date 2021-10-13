<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import Search from './lib/Search.svelte'
</script>

<main>
  <h1>오늘 <Search /></h1>
  <h1>영업하나요?</h1>

  <!-- <Counter /> -->
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #EEEEEE;
  }

  main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  h1 {
    color: #222831;
    font-size: 3rem;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 15rem;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
