import { FC } from 'react';
import styles from './MainPage.module.scss';
import ServicesSection from './components/ServicesSection/ServicesSection';
import AboutSection from './components/AboutSection/AboutSection';
import HeroSection from './components/HeroSection/HeroSection';
import VerticalProgressBar from './components/VerticalProgressBar/VerticalProgressBar';
import ContactSection from './components/ContactSection/ContactSection';
import Heading from '@components/Heading/Heading';
import { points } from '@db/progressBarPoints';
import { components } from '@db/serviceTabs';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = () => {
	return (
		<main className={styles.mainPage}>
			<HeroSection />
			<Heading text={'О Нас'} />
			<AboutSection />
			<Heading text={'Наши преимущества'} />
			<BenefitsSection />
			<Heading text={'Услуги'} />
			<ServicesSection components={components} />
			<Heading text={'Схема сотрудничества'} />
			<VerticalProgressBar points={points} />
			<PortfolioSection />
			<Heading text={'Контакты'} />
			<ContactSection />
		</main>
	);
};

export default MainPage;
