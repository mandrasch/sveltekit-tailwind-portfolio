<script lang="ts">
	import SkillCard from './SkillCard.svelte';
	import type { Skill } from '$models/skill.model';
	export let skills: Skill[];
</script>

<div class="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
	{#each skills as skill}
		<SkillCard skillName={skill.skillName} skillIcon={skill.skillIcon} />
	{/each}
</div>
