<script>
  import Palette from '$lib/Palette.svelte'

  const n = 33

  let primaryColor = '#4b0082',
    secondaryColor = '#fc6d26',
    useSass = true,
    useRgb = true

  $: text = useSass ? 'SASS' : 'CSS'
</script>

<header class={`app-bar`}>
  <Palette color={primaryColor} />
</header>
<div class={`app-shell`}>
  <div></div>
  <div>
    <main class={`main-content`}>
      <div>
        <section class={`card`}>
          <header>
            <h3>Seed color</h3>
          </header>
          <div class={`list-tile`}>
            <div class={`color-picker`}>
              <input type="color" bind:value={primaryColor} />
            </div>
            <div>
              <p class={`shrink`}><strong>Primary</strong></p>
              <p class={`shrink`}><small>{primaryColor}</small></p>
            </div>
          </div>
          <hr />
          <div class={`list-tile`}>
            <div class={`color-picker`}>
              <input type="color" bind:value={secondaryColor} />
            </div>
            <div>
              <p class={`shrink`}><strong>Secondary</strong></p>
              <p class={`shrink`}><small>{secondaryColor}</small></p>
            </div>
          </div>
          <hr />
          <div class={`list-tile checkbox`}>
            <span>Use SASS</span>
            <label class="switch">
              <input type="checkbox" bind:checked={useSass} />
              <span class="slider round"></span>
            </label>
          </div>
          <hr />
          <div class={`list-tile checkbox`}>
            <span>Include RGB</span>
            <label class="switch">
              <input type="checkbox" bind:checked={useRgb} />
              <span class="slider round"></span>
            </label>
          </div>
          <hr class={`transparent`} />
          <div class={`center`}>
            <button class={`btn rounded`} type="button"><span><strong>{`Copy as ${text} variabels`}</strong></span></button>
          </div>
          <hr class={`transparent`} />
        </section>
      </div>
      <hr />
      <div>
        <section class={`card`}>
          <header>
            <h3>Light scheme</h3>
          </header>
          <div class={`color-grid`}>
            {#each Array.from({ length: n }) as item}
              <div class={`color-grid-item`}>{item}</div>
            {/each}
          </div>
        </section>
        <hr class={`transparent`} />
        <section class={`card`}>
          <header>
            <h3>Dark scheme</h3>
          </header>
          <div class={`color-grid`}>
            {#each Array.from({ length: n }) as item}
              <div class={`color-grid-item`}>{item}</div>
            {/each}
          </div>
        </section>
      </div>
    </main>
  </div>
  <div></div>
</div>
