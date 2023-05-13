<script lang="ts">
	export let skillName: string;
	export let skillIcon: string; // TODO: fa type string...
</script>

<div class="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
	{skillIcon}
	<p class="text-xl font-semibold mt-4">{skillName}</p>
</div>
