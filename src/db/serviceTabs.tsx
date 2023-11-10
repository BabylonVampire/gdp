import ServiceTab from '../pages/MainPage/components/ServicesSection/components/ServiceTab/ServiceTab';
import { cardPulls } from './cardPulls';
import { web } from './services';
import { skullIcon, palette, camera } from './icons';

export const components = [
	{
		component: <ServiceTab tabContent={web} icon={skullIcon} />,
		name: cardPulls.web.name,
	},
	{
		component: <ServiceTab tabContent={web} icon={palette} />,
		name: cardPulls.design.name,
	},
	{
		component: <ServiceTab tabContent={web} icon={camera} />,
		name: cardPulls.video.name,
	},
];
