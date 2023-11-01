import { FC, useState } from 'react';
import styles from './WebSiteCard.module.scss';
import Button from '../../../../../../GlassUI/Button/Button';
import { HiComputerDesktop, HiOutlineDevicePhoneMobile } from 'react-icons/hi2';

interface IWebSiteCardProps {
	card: {
		title: string;
		description: string;
		sitePic: string;
		sitePicPhone: string;
	};
}

const WebSiteCard: FC<IWebSiteCardProps> = ({ card }) => {
	const [mode, setMode] = useState<boolean>(false);
	return (
		<div
			className={styles.webSiteCard}
			style={{
				height: mode ? '85vw' : '40vw',
				width: mode ? '40%' : '60%',
			}}
		>
			<div
				className={styles.innerBox}
				style={{
					flexDirection: mode ? 'row' : 'column',
				}}
			>
				<div
					className={styles.topBox}
					style={{
						width: mode ? '50%' : '90%',
					}}
				>
					<div
						className={styles.titleAndDescription}
						style={{
							display: mode ? 'none' : 'flex',
						}}
					>
						<div className={styles.title}>{card.title}</div>
						<div className={styles.description}>
							{card.description}
						</div>
					</div>
					<Button
						onClick={() => setMode((prev) => !prev)}
						className={styles.changeModeBtn}
						style={{
							margin: mode ? '0 auto' : 0,
						}}
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
						src={mode ? card.sitePicPhone : card.sitePic}
						alt={card.title}
					/>
				</div>
			</div>
		</div>
	);
};

export default WebSiteCard;
