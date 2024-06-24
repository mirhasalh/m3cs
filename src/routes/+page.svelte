<script lang="ts">
  import { onMount } from 'svelte'
  import Palette from '$lib/Palette.svelte'
  import { hexFromArgb, argbFromHex, themeFromSourceColor, applyTheme } from '@material/material-color-utilities'
  import { rgbaFromHex, determineLightOrDark } from '$lib'

  let primaryColor = '#4b0082',
    secondaryColor = '#fc6d26',
    useSass = true,
    useRgb = true,
    colorScheme: App.ColorScheme,
    colorSchemeDark: App.ColorScheme,
    containers: App.Container[] = [],
    containersDark: App.Container[] = [],
    systemDark: boolean

  $: theme = themeFromSourceColor(argbFromHex(primaryColor), [
    {
      name: 'custom-1',
      value: argbFromHex(secondaryColor),
      blend: true
    }
  ])

  const determineContainers = () => {
    systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    colorScheme = theme.schemes.light
    colorSchemeDark = theme.schemes.dark

    const cloned = JSON.parse(JSON.stringify(colorScheme))
    const cloned2 = JSON.parse(JSON.stringify(colorSchemeDark))

    containers = []
    containersDark = []

    for (let k in cloned) {
      const hex = hexFromArgb(cloned[k])
      const rgba = rgbaFromHex(hex, 1)
      const brightness = determineLightOrDark(rgba)
      const fontColor = brightness === 'dark' ? '#000' : '#fff'

      containers = [...containers, { name: k, color: hex, fontColor: fontColor }]
    }

    for (let j in cloned2) {
      const hex = hexFromArgb(cloned2[j])
      const rgba = rgbaFromHex(hex, 1)
      const brightness = determineLightOrDark(rgba)
      const fontColor = brightness === 'dark' ? '#000' : '#fff'

      containersDark = [...containersDark, { name: j, color: hex, fontColor: fontColor }]
    }

    applyTheme(theme, { target: document.body, dark: systemDark })
  }

  $: text = useSass ? 'SASS' : 'CSS'
  $: if (primaryColor && colorScheme) determineContainers()

  onMount(() => {
    determineContainers()
  })
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
            <div class={`switch`}>
              <input type="checkbox" id="sass" bind:checked={useSass} />
              <label for="sass">Use SASS</label>
            </div>
          </div>
          <hr />
          <div class={`list-tile checkbox`}>
            <div class={`switch`}>
              <input type="checkbox" id="rgb" bind:checked={useRgb} />
              <label for="rgb">Include RGB</label>
            </div>
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
            {#each containers as c}
              <div class={`color-grid-item`} style={`background-color: ${c.color}; color: ${c.fontColor};`}>
                <p><small>{c.name}</small></p>
              </div>
            {/each}
          </div>
        </section>
        <hr class={`transparent`} />
        <section class={`card`}>
          <header>
            <h3>Dark scheme</h3>
          </header>
          <div class={`color-grid`}>
            {#each containersDark as c}
              <div class={`color-grid-item`} style={`background-color: ${c.color}; color: ${c.fontColor};`}>
                <p><small>{c.name}</small></p>
              </div>
            {/each}
          </div>
        </section>
      </div>
    </main>
  </div>
  <div></div>
</div>
