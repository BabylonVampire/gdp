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
		backGround: 'rgb(23 12 50)',
	},
	video: {
		name: '3',
		cardPull: servicesCardsVideo,
		backGround: 'rgb(39 37 15)',
	},
};
