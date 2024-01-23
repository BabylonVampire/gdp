import {
	servicesCardsDesign,
	servicesCardsVideo,
	servicesCardsWeb,
} from './servicesCards';

export const cardPulls = {
	web: {
		name: 'Разработка',
		cardPull: servicesCardsWeb,
		backGround: 'url(/src/assets/background/backService_2.gif)',
	},
	design: {
		name: 'Дизайн',
		cardPull: servicesCardsDesign,
		backGround: 'url(/src/assets/background/backService_2.gif)',
	},
	video: {
		name: 'Видеопродакшн',
		cardPull: servicesCardsVideo,
		backGround: 'url(/src/assets/background/backService_2.gif)',
	},
};
