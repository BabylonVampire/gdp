import { FC } from 'react';
import styles from './WebSiteTab.module.scss';
import WebSiteCard from '../WebSiteCard/WebSiteCard';

interface IWebSiteTabProps {
	cards: {
		title: string;
		description: string;
		sitePic: string;
	}[];
}

const WebSiteTab: FC<IWebSiteTabProps> = ({ cards }) => {
	return (
		<div className={styles.webSiteTab}>
			{cards.map((card) => {
				return <WebSiteCard card={card} />;
			})}
		</div>
	);
};

export default WebSiteTab;
