// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

// https://github.com/Cweili/svelte-fa
declare module '@fortawesome/free-solid-svg-icons/index.d.ts' {
	export * from '@fortawesome/free-solid-svg-icons';
}
declare module '@fortawesome/free-brands-svg-icons/index.d.ts' {
	export * from '@fortawesome/free-brands-svg-icons';
}

export {};
