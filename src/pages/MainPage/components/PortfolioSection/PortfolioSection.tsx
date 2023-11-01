import { FC } from 'react';
import styles from './PortfolioSection.module.scss';
import Tabs from '../../../../components/Tabs/Tabs';
import WebSiteTab from './components/WebSiteTab/WebSiteTab';

interface IPortfolioSectionProps {}

const PortfolioSection: FC<IPortfolioSectionProps> = ({}) => {
	return (
		<div className={styles.PortfolioSection}>
			<Tabs
				tabs={[
					{
						component: (
							<WebSiteTab
								cards={[
									{
										title: 'Сыпучий груз',
										description:
											'Пример многостраничного интернет-магазина',
										sitePic:
											'/src/assets/portfolio/sites/sypGr.png',
										sitePicPhone:
											'/src/assets/portfolio/sites/sypGrPhone.png',
									},
									{
										title: 'Тема Бар',
										description: 'Пример сайта-визитки',
										sitePic:
											'/src/assets/portfolio/sites/temaBar.png',
										sitePicPhone:
											'/src/assets/portfolio/sites/sypGrPhone.png',
									},
									{
										title: 'Shine Bright',
										description:
											'Пример многостраничного интернет-магазина',
										sitePic:
											'/src/assets/portfolio/sites/shineBright.png',
										sitePicPhone:
											'/src/assets/portfolio/sites/sypGrPhone.png',
									},
								]}
							/>
						),
						name: 'Наши сайты',
					},
					{
						component: <></>,
						name: 'Съемка видео',
					},
					{
						component: <></>,
						name: 'Дизайн',
					},
				]}
			/>
		</div>
	);
};

export default PortfolioSection;
