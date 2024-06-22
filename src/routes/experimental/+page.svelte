<script lang="ts">
  import { onMount } from 'svelte'
  import { hexFromArgb, argbFromHex, themeFromSourceColor, applyTheme } from '@material/material-color-utilities'
  import { rgbaFromHex, determineLightOrDark } from '$lib'

  let seedColor = '#4B0082',
    secondarySeedColor = '#E24329',
    colorScheme: App.ColorScheme,
    containers: App.Container[] = [],
    systemDark: boolean

  const theme = themeFromSourceColor(argbFromHex(seedColor), [
    {
      name: 'custom-1',
      value: argbFromHex(secondarySeedColor),
      blend: true
    }
  ])

  onMount(() => {
    systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (systemDark) {
      colorScheme = theme.schemes.dark
    } else {
      colorScheme = theme.schemes.light
    }

    const cloned = JSON.parse(JSON.stringify(colorScheme))

    for (let k in cloned) {
      const hex = hexFromArgb(cloned[k])
      const rgba = rgbaFromHex(hex, 1)
      const brightness = determineLightOrDark(rgba)
      const fontColor = brightness === 'dark' ? '#000' : '#fff'

      containers = [...containers, { name: k, color: hex, fontColor: fontColor }]
    }

    applyTheme(theme, { target: document.body, dark: systemDark })
  })

  const getContainers = () => {
    const cloned = JSON.parse(JSON.stringify(colorScheme))

    for (let k in cloned) {
      const hex = hexFromArgb(cloned[k])
      const rgba = rgbaFromHex(hex, 1)
      const brightness = determineLightOrDark(rgba)
      const fontColor = brightness === 'dark' ? '#000' : '#fff'

      containers = [...containers, { name: k, color: hex, fontColor: fontColor }]
    }
  }

  $: if (seedColor && colorScheme) getContainers()
</script>

{#if containers}
  {#each containers as c}
    <div class={`container`} style={`background-color: ${c.color};`}>
      <p style={`color: ${c.fontColor};`}>{c.name}</p>
    </div>
  {/each}
{/if}
