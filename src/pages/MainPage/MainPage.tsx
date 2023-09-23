import { FC } from 'react';
import styles from './MainPage.module.scss';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = ({}) => {
	return (
		<main className={styles.mainPage}>
			<BenefitsSection />
		</main>
	);
};

export default MainPage;
