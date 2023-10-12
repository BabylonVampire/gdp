import CardsGallery from '../pages/MainPage/components/ServicesSection/components/CardsGallery/CardGallery';
import { cardPulls } from './cardPulls';

export const components = [
	{
		component: <CardsGallery cardPull={cardPulls.web} />,
		name: cardPulls.web.name,
	},
	{
		component: <CardsGallery cardPull={cardPulls.design} />,
		name: cardPulls.design.name,
	},
	{
		component: <CardsGallery cardPull={cardPulls.video} />,
		name: cardPulls.video.name,
	},
];
