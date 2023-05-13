<script lang="ts">
	import { onMount } from 'svelte';

	import About from '$components/About.svelte';
	import Card from '$components/Card.svelte';
	import Skills from '$components/Skills.svelte';
	import Projects from '$components/Projects.svelte';
	import Footer from '$components/Footer.svelte';

	import { data } from '$lib/data';

	// https://github.com/michalsnik/aos
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	// https://svelte.dev/tutorial/onmount
	onMount(() => {
		AOS.init();
	});
</script>

<!-- TODO: replace animate on scroll / aos https://github.com/michalsnik/aos -->
<!-- react original:
<div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
	<div data-aos="fade-down" data-aos-duration="800">
		<Card name={data.name} title={data.title} social={data.social} />
	</div>
	<div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
		<About title={data.about.title} description={data.about.description} />
		<Skills skills={data.skills} />
		<Projects projects={data.projects} />
		<Footer github={data.social.github} />
	</div>
</div>
-->

<div class="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
	<Card name={data.name} title={data.title} social={data.social} />
	<div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
		<About title={data.about.title} description={data.about.description} />
		<Skills skills={data.skills} />
		<Projects projects={data.projects} />
		<Footer github={data.social.github} />
	</div>
</div>

<p>Made with <a href="https://kit.svelte.dev">kit.svelte.dev</a></p>
