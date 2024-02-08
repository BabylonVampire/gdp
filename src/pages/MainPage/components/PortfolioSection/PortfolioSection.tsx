import Tabs from '../../../../components/Tabs/Tabs';
import styles from './PortfolioSection.module.scss';
import VideoTab from './components/VideoTab/VideoTab';
import WebSiteTab from './components/WebSiteTab/WebSiteTab';

const PortfolioSection = () => {
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
											'https://imgbly.com/ib/GFSyXHoDsK.png',
										sitePicPhone:
											'https://imgbly.com/ib/OMWezzoceL.png',
									},
									{
										title: 'Развитие',
										description: 'Пример сайта-визитки',
										sitePic:
											'https://imgbly.com/ib/0akwwLN5B0.png',
										sitePicPhone:
											'https://imgbly.com/ib/N9TUT9OkYf.png',
									},
									// {
									// 	title: 'Тема Бар',
									// 	description: 'Пример сайта-визитки',
									// 	sitePic:
									// 		'/src/assets/portfolio/sites/temaBar.png',
									// 	sitePicPhone:
									// 		'/src/assets/portfolio/sites/sypGrPhone.png',
									// },
									// {
									// 	title: 'Shine Bright',
									// 	description:
									// 		'Пример многостраничного интернет-магазина',
									// 	sitePic:
									// 		'/src/assets/portfolio/sites/shineBright.png',
									// 	sitePicPhone:
									// 		'/src/assets/portfolio/sites/sypGrPhone.png',
									// },
								]}
							/>
						),
						name: 'Сайты',
					},
					{
						component: (
							<VideoTab
								links={[
									'https://www.youtube.com/embed/byZ55ljdeZo?si=H7PWxhfor7zfhabI',
									'https://www.youtube.com/embed/WZIA5R5OpUM?si=eeoncKYud0-i8RUj',
									'https://www.youtube.com/embed/WqB8Am4DH1E?si=uL33G6xwUTEIF96U',
									'https://www.youtube.com/embed/egJgCKWlbzA?si=cFN92Hn86DqRGzcv',
									'https://www.youtube.com/embed/Qph691VXPqc?si=EJLXPfn4eEHe6CW1',
								]}
							/>
						),
						name: 'Видео',
					},
					// {
					// 	component: <></>,
					// 	name: 'Дизайн',
					// },
				]}
			/>
		</div>
	);
};

export default PortfolioSection;
