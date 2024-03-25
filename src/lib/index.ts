// place files you want to import through the `$lib` alias in this folder.

export const rgbaFromHex = (color: string, opacity: number) => {
    const alpha = Number.isFinite(opacity) && opacity > 1 ? opacity / 100 : Number.isFinite(opacity) && opacity <= 1 ? opacity : 1
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    color = color.replace(shorthandRegex, (m, r, g, b) => {
        return r + r + g + g + b + b
    })

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: alpha
    } : { r: 0, g: 0, b: 0, a: alpha }
}

export const determineLightOrDark = (rgba: App.RGBA) => {
    const r = rgba.r
    const g = rgba.g
    const b = rgba.b

    const threshold = r * 0.299 + g * 0.587 + b * 0.114

    if (threshold >= 250) {
        return 'dark'
    } else {
        return 'light'
    }
}
