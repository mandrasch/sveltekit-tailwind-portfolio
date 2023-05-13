<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/index.js';
	import { stringify } from 'postcss';
	// TODO: replace https://github.com/buttons/react-github-btn
	// import { GitHubButton } from 'react-github-btn';

	import type { Project } from '$models/project.model';
	export let project: Project; // TODO: types
</script>

<div class="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
	<a href={project.link}>
		<h1 class="text-xl text-center font-bold">
			{project.title}{' '}
			<Fa icon={faExternalLinkAlt} class="inline align-baseline" />
		</h1>
	</a>
	<hr class="my-4" />
	<p>{project.description}</p>
	<div class="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
		{#each project.tags as tag}
			<div class="px-4 py-1 border-2 rounded-full">{tag}</div>
		{/each}
	</div>
	<div class="w-full text-center">
		<!--	<GitHubButton
			href={project.link}
			data-color-scheme="no-preference: light; light: light; dark: light;"
			data-icon="octicon-star"
			data-size="large"
			data-show-count="true"
			aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton
		>
		{'  '}
		<GitHubButton
			href={project.link + '/fork'}
			data-color-scheme="no-preference: light; light: light; dark: light;"
			data-icon="octicon-repo-forked"
			data-size="large"
			data-show-count="true"
			aria-label="Fork ntkme/github-buttons on GitHub">Fork</GitHubButton
		> -->
	</div>
</div>
