import { FC } from 'react';
import styles from './VideoCard.module.scss';

interface IVideoCardProps {
	link: string;
}

const VideoCard: FC<IVideoCardProps> = ({ link }) => {
	return (
		<div className={styles.videoCard}>
			<iframe
				className={styles.iframeVideo}
				loading="lazy"
				src={link}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			/>
		</div>
	);
};

export default VideoCard;
