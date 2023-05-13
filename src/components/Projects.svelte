<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from '$models/project.model';
	export let projects: Project[];
</script>

<h1 class="mt-8 text-2xl md:text-4xl text-center font-extrabold">My projects</h1>
<div>
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</div>
