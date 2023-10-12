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
import Heading from '../../components/Heading/Heading';

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

	const components = [
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

	return (
		<main className={styles.mainPage}>
			<HeroSection />
			<AboutSection />
			<Heading text={'Услуги'} />
			<ServicesSection components={components} />
			{/* <Heading text={'Схема сотрудничества'} /> */}
			<VerticalProgressBar points={points} />
			{/* <Heading text={'Контакты'} /> */}
			<ContactSection />
		</main>
	);
};

export default MainPage;
