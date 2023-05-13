<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class="max-w-4xl mx-auto mt-16">
	<p class="text-2xl md:text-4xl font-bold text-center">{title}</p>
	<p class="text-base text-left md:text-center text-gray-600 leading-relaxed mt-4">
		{description}
	</p>
</div>
