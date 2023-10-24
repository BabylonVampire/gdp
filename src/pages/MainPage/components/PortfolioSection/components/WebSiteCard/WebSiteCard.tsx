import { FC, useState } from 'react';
import styles from './WebSiteCard.module.scss';
import Button from '../../../../../../GlassUI/Button/Button';
import { HiComputerDesktop, HiOutlineDevicePhoneMobile } from 'react-icons/hi2';

interface IWebSiteCardProps {
	card: { title: string; description: string; sitePic: string };
}

const WebSiteCard: FC<IWebSiteCardProps> = ({ card }) => {
	const [mode, setMode] = useState<boolean>(false);
	return (
		<div className={styles.webSiteCard}>
			<div className={styles.innerBox}>
				<div className={styles.topBox}>
					<div className={styles.titleAndDescription}>
						<div className={styles.title}>{card.title}</div>
						<div className={styles.description}>
							{card.description}
						</div>
					</div>
					<Button
						onClick={() => setMode((prev) => !prev)}
						className={styles.changeModeBtn}
					>
						{mode ? (
							<HiComputerDesktop />
						) : (
							<HiOutlineDevicePhoneMobile />
						)}
					</Button>
				</div>
				<div className={styles.sitePicWrapper}>
					<img
						className={styles.sitePic}
						src={card.sitePic}
						alt={card.title}
					/>
				</div>
			</div>
		</div>
	);
};

export default WebSiteCard;
