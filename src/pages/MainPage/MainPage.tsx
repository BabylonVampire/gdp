import { FC } from 'react';
import styles from './MainPage.module.scss';
import ServicesSection from './components/ServicesSection/ServicesSection';
import AboutSection from './components/AboutSection/AboutSection';
import HeroSection from './components/HeroSection/HeroSection';
import VerticalProgressBar from './components/VerticalProgressBar/VerticalProgressBar';
import { BiAccessibility } from 'react-icons/bi';
import { IPoint } from '../../types/IPoint';
import CardsGallery from './components/ServicesSection/components/CardsGallery/CardGallery';
import {
	servicesCardsDesign,
	servicesCardsVideo,
	servicesCardsWeb,
} from '../../db/servicesCards';
import ContactSection from './components/ContactSection/ContactSection';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = ({}) => {
	const points: IPoint[] = [
		{
			point: {
				icon: <BiAccessibility />,
				heading: 'Пункт 1',
				subText: 'Описание',
			},
			description: {
				heading: 'Заголовок',
				description: 'Вот такое вот описание, да...',
			},
		},
		{
			point: {
				icon: <BiAccessibility />,
				heading: 'Пункт 1',
				subText: 'Описание',
			},
			description: {
				heading: 'Заголовок',
				description: 'Вот такое вот описание, да...',
			},
		},
		{
			point: {
				icon: <BiAccessibility />,
				heading: 'Пункт 1',
				subText: 'Описание',
			},
			description: {
				heading: 'Заголовок',
				description: 'Вот такое вот описание, да...',
			},
		},
	];

	const cardPulls = {
		web: {
			name: '1',
			cardPull: servicesCardsWeb,
			backGroundColor: '#111111',
		},
		design: {
			name: '2',
			cardPull: servicesCardsDesign,
			backGroundColor: 'rgb(23 12 50)',
		},
		video: {
			name: '3',
			cardPull: servicesCardsVideo,
			backGroundColor: 'rgb(39 37 15)',
		},
	};

	const components = [
		{ component: <CardsGallery cardPull={cardPulls.web} />, name: '1' },
		{ component: <CardsGallery cardPull={cardPulls.design} />, name: '2' },
		{ component: <CardsGallery cardPull={cardPulls.video} />, name: '3' },
	];

	return (
		<main className={styles.mainPage}>
			<HeroSection />
			<AboutSection />
			<ServicesSection components={components} />
			<VerticalProgressBar points={points} />
			<ContactSection />
		</main>
	);
};

export default MainPage;
