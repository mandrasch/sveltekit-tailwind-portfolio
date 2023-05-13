<script lang="ts">
	export let name: string;
	export let title: string;
	export let social: SocialLinks;

	import profile from '../images/profile.png';

	import Fa from 'svelte-fa/src/fa.svelte';
	import { faGithub, faDribbble, faTwitter } from '@fortawesome/free-brands-svg-icons/index.js';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons/index.js';

	// TODO: Move to models folder

	interface SocialLinks {
		github: string;
		dribbble: string;
		twitter: string;
		email: string;
	}

	interface CardProps {
		name: string;
		title: string;
		social: SocialLinks;
	}
</script>

<div class="w-full">
	<div class="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
		<div>
			<img class="w-32 mx-auto shadow-xl rounded-full" src={profile} alt="Profile face" />
		</div>
		<div class="text-center mt-5">
			<p class="text-xl sm:text-2xl font-semibold text-gray-900">{name}</p>
			<p class="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
				{title}
			</p>
			<div class="flex align-center justify-center mt-4">
				<a
					class="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
					href={social.github}
				>
					<Fa icon={faGithub} />
					<span class="sr-only">Github</span>
				</a>
				<a
					class="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
					href={social.dribbble}
				>
					<Fa icon={faDribbble} />
					<span class="sr-only">Dribble</span>
				</a>
				<a
					class="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
					href={social.twitter}
				>
					<Fa icon={faTwitter} />
					<span class="sr-only">Twitter</span>
				</a>
				<a
					class="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
					href={'https://mail.google.com/mail/?view=cm&fs=1&to=' + social.email}
				>
					<Fa icon={faEnvelope} />
					<span class="sr-only">Email</span>
				</a>
			</div>
		</div>
	</div>
</div>
