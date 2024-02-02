import { FC } from 'react';
import styles from './VideoTab.module.scss';
import VideoCard from '../VideoCard/VideoCard';

interface IVideoTabProps {
	links: string[];
}

const VideoTab: FC<IVideoTabProps> = ({ links }) => {
	return (
		<div className={styles.videoTab}>
			{links.map((link) => {
				return <VideoCard link={link} />;
			})}
		</div>
	);
};

export default VideoTab;
