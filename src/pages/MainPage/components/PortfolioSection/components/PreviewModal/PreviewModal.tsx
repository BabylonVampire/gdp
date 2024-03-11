import { FC } from 'react';
import styles from './PreviewModal.module.scss';
import { IModalContent } from '../../PortfolioSection';

interface IPreviewModalProps {
	content: IModalContent;
	onCancel: () => void;
}

const PreviewModal: FC<IPreviewModalProps> = ({ content, onCancel }) => {
	const getModalContent = () => {
		switch (content.child.type) {
			case 'image':
				return (
					<div className={styles.modalImgWrapper}>
						<img
							className={styles.modalImg}
							src={content.child.content}
							alt="Пример сайта"
						/>
					</div>
				);
			case 'video':
				return (
					<iframe
						className={styles.modalIframeVideo}
						loading="lazy"
						frameBorder={0}
						src={`${content.child.content}&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1`}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
					/>
				);
			default:
				return;
		}
	};

	return (
		<div className={styles.previewModal}>
			<div className={styles.modalWindow}>
				<div className={styles.innerBox}>
					<div className={styles.childrenWrapper}>
						{getModalContent()}
					</div>
					<div className={styles.textBox}>
						<h2 className={styles.title}>{content.title}</h2>
						<div className={styles.divider} />
						<p className={styles.description}>
							{content.description}
						</p>
					</div>
				</div>
			</div>
			<div className={styles.background} onClick={onCancel} />
		</div>
	);
};

export default PreviewModal;
