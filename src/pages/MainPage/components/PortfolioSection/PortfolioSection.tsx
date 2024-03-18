import { Carousel } from 'antd';
import { PATH_TO_PORTFOLIO } from '../../../../config';
import styles from './PortfolioSection.module.scss';
import { useState } from 'react';
import CarouselSlide from './components/CarouselSlide/CarouselSlide';
import PreviewModal from './components/PreviewModal/PreviewModal';

export interface IModalContent {
	title: string;
	description: string;
	child: {
		type: 'video' | 'image';
		content: string;
	};
}

const PortfolioSection = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [modalContent, setModalContent] = useState<IModalContent>();

	const toggleModal = () => {
		setOpenModal((prev) => !prev);
	};

	const links: IModalContent[] = [
		{
			title: 'asd',
			description: 'asd',
			child: {
				type: 'video',
				content:
					'https://www.youtube.com/embed/byZ55ljdeZo?si=H7PWxhfor7zfhabI',
			},
		},
		{
			title: 'asd',
			description: 'asd',
			child: {
				type: 'video',
				content:
					'https://www.youtube.com/embed/WZIA5R5OpUM?si=eeoncKYud0-i8RUj',
			},
		},
		{
			title: 'asd',
			description: 'asd',
			child: {
				type: 'video',
				content:
					'https://www.youtube.com/embed/WqB8Am4DH1E?si=uL33G6xwUTEIF96U',
			},
		},
		{
			title: 'asd',
			description: 'asd',
			child: {
				type: 'video',
				content:
					'https://www.youtube.com/embed/egJgCKWlbzA?si=cFN92Hn86DqRGzcv',
			},
		},
		{
			title: 'asd',
			description: 'asd',
			child: {
				type: 'video',
				content:
					'https://www.youtube.com/embed/Qph691VXPqc?si=EJLXPfn4eEHe6CW1',
			},
		},
		{
			title: 'asd',
			description: 'asd',
			child: {
				type: 'video',
				content:
					'https://www.youtube.com/embed/I6eUCvGaqVc?si=bQ5UigsZW5_5cidb',
			},
		},
	];

	const webPics: IModalContent[] = [
		{
			title: 'Развитие',
			description: 'Пример сайта-визитки',
			child: {
				type: 'image',
				content: `${PATH_TO_PORTFOLIO}razvitie.jpg`,
			},
		},
		{
			title: 'Тема Бар',
			description: 'Пример сайта-визитки',
			child: {
				type: 'image',
				content: `${PATH_TO_PORTFOLIO}temaBar.jpg`,
			},
		},
		{
			title: 'Shine Bright',
			description: 'Пример многостраничного интернет-магазина',
			child: {
				type: 'image',
				content: `${PATH_TO_PORTFOLIO}shineBright.jpg`,
			},
		},
	];
	const designPics: IModalContent[] = [
		{
			title: 'Развитие',
			description: 'Пример сайта-визитки',
			child: {
				type: 'image',
				content: `${PATH_TO_PORTFOLIO}razvitie.jpg`,
			},
		},
		{
			title: 'Тема Бар',
			description: 'Пример сайта-визитки',
			child: {
				type: 'image',
				content: `${PATH_TO_PORTFOLIO}temaBar.jpg`,
			},
		},
		{
			title: 'Shine Bright',
			description: 'Пример многостраничного интернет-магазина',
			child: {
				type: 'image',
				content: `${PATH_TO_PORTFOLIO}shineBright.jpg`,
			},
		},
	];

	return (
		<div className={styles.PortfolioSection}>
			{openModal && modalContent && (
				<PreviewModal content={modalContent} onCancel={toggleModal} />
			)}
			<div className={styles.innerBox}>
				<div className={styles.topLevel}>
					<div className={styles.videoPortfolio}>
						<p className={styles.portfolioTitle}>Видеопродакшн</p>
						<Carousel className={styles.portfolioCarousel} autoplay>
							{links.map((link) => {
								return (
									<CarouselSlide
										key={link.title + link.child.content}
										toggleModal={toggleModal}
										setModalContent={() =>
											setModalContent(link)
										}
									>
										<div className={styles.videoCard}>
											<iframe
												className={styles.iframeVideo}
												frameBorder={0}
												src={`${link.child.content}&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1`}
												title="YouTube video player"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
											/>
										</div>
									</CarouselSlide>
								);
							})}
						</Carousel>
					</div>
					<div className={styles.descriptionBox}>
						<div className={styles.descriptionInnerBox}>
							<h2 className={styles.heading}>ПОРТФОЛИО</h2>
							<p className={styles.description}>
								Наше портфолио выглядит как то так...
							</p>
							<div className={styles.divider} />
							<div className={styles.buttonBox}>
								<button className={styles.button}>
									Скачать файл
								</button>
								<a className={styles.button} href="#contacts">
									Связь с нами
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.bottomLevel}>
					<div className={styles.webPortfolio}>
						<p className={styles.portfolioTitle}>Сайты</p>
						<Carousel className={styles.portfolioCarousel} autoplay>
							{webPics.map((pic) => {
								return (
									<CarouselSlide
										key={pic.title + pic.child.content}
										allowPointerEvents
										toggleModal={toggleModal}
										setModalContent={() =>
											setModalContent(pic)
										}
									>
										<div className={styles.webCard}>
											<img
												className={styles.webCardImg}
												src={pic.child.content}
												alt="Пример сайта"
											/>
										</div>
									</CarouselSlide>
								);
							})}
						</Carousel>
					</div>
					<div className={styles.designPortfolio}>
						<p className={styles.portfolioTitle}>Дизайн</p>
						<Carousel className={styles.portfolioCarousel} autoplay>
							{designPics.map((pic) => {
								return (
									<CarouselSlide
										key={pic.title + pic.child.content}
										allowPointerEvents
										toggleModal={toggleModal}
										setModalContent={() =>
											setModalContent(pic)
										}
									>
										<div className={styles.webCard}>
											<img
												className={styles.webCardImg}
												src={pic.child.content}
												alt="Пример дизайна"
											/>
										</div>
									</CarouselSlide>
								);
							})}
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioSection;
