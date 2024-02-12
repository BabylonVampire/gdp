import ServiceTab from '../pages/MainPage/components/ServicesSection/components/ServiceTab/ServiceTab';
import { web, video, design, marketing } from './services';
import { skullIcon, palette, camera } from './icons';
import { lamp } from './icons';
export const components = [
	{
		component: (
			// <TypingIntoBrowser
			// 	text={cardPulls.web.name}
			// 	speed={50}
			// 	loadingTime={1}
			// >
			<ServiceTab tabContent={web} icon={skullIcon} />
			// </TypingIntoBrowser>
		),
		name: 'Разработка',
	},
	{
		component: (
			// <TypingIntoBrowser
			// 	text={cardPulls.design.name}
			// 	speed={50}
			// 	loadingTime={1}
			// >
			<ServiceTab tabContent={video} icon={palette} />
			// </TypingIntoBrowser>
		),
		name: 'Дизайн',
	},
	{
		component: (
			// <TypingIntoBrowser
			// 	text={cardPulls.video.name}
			// 	speed={50}
			// 	loadingTime={1}
			// >
			<ServiceTab tabContent={design} icon={camera} />
			// </TypingIntoBrowser>
		),
		name: 'Видео',
	},
	{
		component: (
			// <TypingIntoBrowser
			// 	text={cardPulls.video.name}
			// 	speed={50}
			// 	loadingTime={1}
			// >
			<ServiceTab tabContent={marketing} icon={lamp} />
			// </TypingIntoBrowser>
		),
		name: 'Маркетинг',
	},
];
