// TODO: move this somewhere else / import it?
// https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts

interface Social {
	github: string;
	dribbble: string;
	twitter: string;
	email: string;
}

interface About {
	title: string;
	description: string;
}

interface Skill {
	skillName: string;
	skillIcon: string; // JSX.Element; // TODO use svelte icon library
}

interface Project {
	title: string;
	description: string;
	tags: string[];
	link: string;
}

interface Data {
	name: string;
	title: string;
	social: Social;
	about: About;
	skills: Skill[];
	projects: Project[];
}

export const data: Data = {
	name: 'Brayden W',
	title: 'Front-End Developer/Designer',
	social: {
		github: 'https://github.com/BraydenTW',
		dribbble: 'https://github.com/BraydenTW',
		twitter: 'https://github.com/BraydenTW',
		email: 'someone@example.com'
	},
	about: {
		title: 'My Background',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper porta pharetra. Nunc porta dui eu mattis laoreet. Quisque lobortis orci sagittis, luctus ligula nec, sagittis leo. Ut convallis eu mi dignissim facilisis. Donec egestas vitae sapien quis bibendum. Sed rhoncus aliquet felis, ac cursus dui varius sit amet. Etiam eu nisi ligula. Sed sagittis massa a metus pulvinar, eu vestibulum nulla molestie. Nullam luctus sit amet felis quis ullamcorper. '
	},
	skills: [
		{
			skillName: 'Frontend',
			skillIcon: '' // TODO: replace <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />
		},
		{
			skillName: 'Design/UX',
			skillIcon: '' // TODO: replace <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />
		},
		{
			skillName: 'ReactJS',
			skillIcon: '' // TODO: replace <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />
		}
	],
	projects: [
		{
			title: 'React tailwind portfolio',
			description: '👨‍🎨 An open-source portfolio template built with React and Tailwind.',
			tags: ['template', 'portfolio', 'reactjs', 'tailwindcss'],
			link: 'https://github.com/braydentw/react-tailwind-portfolio'
		},
		{
			title: 'My personal website',
			description: '⚡ My portfolio built with NextJS and TailwindCSS.',
			tags: ['website', 'portfolio', 'nextjs', 'tailwindcss'],
			link: 'https://github.com/braydentW/braydentw'
		}
	]
};
