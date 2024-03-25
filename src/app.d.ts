// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		type RGBA = {
			r: number
			g: number
			b: number
			a: number
		}

		export interface Container {
			name: string
			color: string
			fontColor: string
		}

		export interface ColorScheme {
			primary: number
			onPrimary: number
			primaryContainer: number
			onPrimaryContainer: number
			secondary: number
			onSecondary: number
			secondaryContainer: number
			onSecondaryContainer: number
			tertiary: number
			onTertiary: number
			tertiaryContainer: number
			onTertiaryContainer: number
			error: number
			onError: number
			errorContainer: number
			onErrorContainer: number
			background: number
			onBackground: number
			surface: number
			onSurface: number
			surfaceVariant: number
			onSurfaceVariant: number
			outline: number
			outlineVariant: number
			shadow: number
			scrim: number
			inverseSurface: number
			inverseOnSurface: number
			inversePrimary: number
		}
	}
}

export { }
