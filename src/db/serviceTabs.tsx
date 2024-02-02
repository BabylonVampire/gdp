import ServiceTab from '../pages/MainPage/components/ServicesSection/components/ServiceTab/ServiceTab';
import { cardPulls } from './cardPulls';
import { web, video, design } from './services';
import { skullIcon, palette, camera } from './icons';
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
		name: cardPulls.web.name,
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
		name: cardPulls.design.name,
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
		name: cardPulls.video.name,
	},
];
