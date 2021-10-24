<script lang="ts">
    import { primeSince } from './lib/prime'

    let value = null
    $: range = primeSince(value)
    $: isPrime = range[range.length - 1] === value

    const backToTop = () => {
      window.scrollTo(0, 0)
    }
</script>

<main id="cal">
    <h1 id="title"><span id="icon">{isPrime ? '✅' : '❌'}</span> Prime</h1>
    <input placeholder="number" bind:value id="input" type="tel" pattern="\d*" />

    <ol id="list">
        {#if value === null || Number(value) === 0}
            <h2 id="detail">Find prime range</h2>
        {:else if range.length === 0}
            <h2 id="detail">No prime found</h2>
        {/if}

        {#each range as prime}
            <li>{prime}</li>
        {/each}
    </ol>
</main>

<a id="fab" on:click={backToTop}>▲</a>

<style>
    #cal,
    #list {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 320px;
    }

    #cal {
        margin: calc(50vh - 180px) auto 0 auto;
        padding: 20px;
    }

    #title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 48px;
        font-weight: 300;
        margin: 40px 0;
    }

    #icon {
      font-size: .75em;
      margin-right: .25em;
    }

    #input {
        font-size: 24px;
        padding: 12px 16px;
        background-color: #efeff4;
        border: 0;
        border-radius: 4px;
        outline: none;
    }

    #detail {
        font-size: 21px;
        font-weight: 300;
        color: #757575;
        margin: 40px 0;
        text-align: center;
    }

    #list {
        list-style-type: none;
        margin: 0;
        padding: 20px 0;
    }

    #list > li {
        font-size: 21px;
        color: #333;
        padding: 12px 16px;
        border-radius: 4px;
        transition: background-color .16s ease-out;
    }

    #list > li:hover,
    #list > li:focus {
        background-color: rgba(0, 0, 0, 0.05);
    }

    #fab {
      bottom: 3.75vh;
      right: 3.75vw;
      position: fixed;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 56px;
      height: 56px;
      font-size: 24px;
      color: #fff;
      border-radius: 32px;
      background-color: #007aff;
      cursor: pointer;
    }
</style>
