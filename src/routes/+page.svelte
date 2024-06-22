<script>
  let primaryColor = '#4b0082',
    secondaryColor = '#fc6d26'

  const n = 33
</script>

<div class={`color-bar-wrapper`}>
  <div class={`color-bar`}>
    <div class="color-pick">
      <input type="color" bind:value={primaryColor} />
    </div>
    <div>
      <h3 class={`shrink`}>Primary</h3>
      <p class={`shrink`}><small>{primaryColor}</small></p>
    </div>
  </div>
  <hr class={`transparent`} />
  <div class={`color-bar`}>
    <div class="color-pick">
      <input type="color" bind:value={secondaryColor} />
    </div>
    <div>
      <h3 class={`shrink`}>Secondary</h3>
      <p class={`shrink`}><small>{secondaryColor}</small></p>
    </div>
  </div>
</div>
<section class={`color-scheme-wrapper`}>
  <header>
    <h4>Light scheme</h4>
  </header>
  <div class={`color-grid`}>
    {#each Array.from({ length: n }) as item}
      <div class={`color-grid-item`}>{item}</div>
    {/each}
  </div>
</section>
<hr class={`transparent`} />
<section class={`color-scheme-wrapper`}>
  <header>
    <h4>Dark scheme</h4>
  </header>
  <div class={`color-grid`}>
    {#each Array.from({ length: n }) as item}
      <div class={`color-grid-item`}>{item}</div>
    {/each}
  </div>
</section>
