import { FC } from 'react';
import styles from './MainPage.module.scss';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import AboutSection from './components/AboutSection/AboutSection';
import HeroSection from './components/HeroSection/HeroSection';
import VerticalProgressBar from './components/VerticalProgressBar/VerticalProgressBar';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = ({}) => {
	return (
		<main className={styles.mainPage}>
			<HeroSection />
			<AboutSection />
			<BenefitsSection />
			<VerticalProgressBar />
		</main>
	);
};

export default MainPage;
