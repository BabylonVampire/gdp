import {
	servicesCardsDesign,
	servicesCardsVideo,
	servicesCardsWeb,
} from './servicesCards';

export const cardPulls = {
	web: {
		name: '1',
		cardPull: servicesCardsWeb,
		backGround: 'url(/src/assets/background/backService_2.gif)',
	},
	design: {
		name: '2',
		cardPull: servicesCardsDesign,
		backGround: 'url(/src/assets/background/backService_2.gif)',
	},
	video: {
		name: '3',
		cardPull: servicesCardsVideo,
		backGround: 'url(/src/assets/background/backService_2.gif)',
	},
};
