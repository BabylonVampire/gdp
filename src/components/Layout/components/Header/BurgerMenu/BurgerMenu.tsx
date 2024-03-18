import { FC } from 'react';
import { FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { ILink } from '../../../../../types/ILink';
import styles from './BurgerMenu.module.scss';

interface IBurgerMenuProps {
	links: ILink[];
	state: boolean;
	setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ links, state, setState }) => {
	return (
		<div
			className={styles.BurgerMenu}
			style={{
				right: state ? '0' : '-50vw',
			}}
		>
			<div className={styles.innerBox}>
				<div className={styles.linkBox}>
					<div className={styles.heading}>Навигация</div>
					{links.map((link) => {
						return (
							<div key={link.heading + link.link}>
								<div className={styles.divider} />
								<a
									key={link.link + link.heading}
									href={link.link}
									className={styles.link}
									onClick={() => setState((prev) => !prev)}
								>
									{link.heading}
								</a>
							</div>
						);
					})}
				</div>
				<div className={styles.outLinks}>
					<a className={styles.outLink} href="tel:+79938917747">
						<FaPhone />
					</a>
					<div className={styles.outLinksBox}>
						<a
							className={styles.outLink}
							href="https://www.instagram.com/gafurovproduction?igsh=N3R6dXdtemg2czRs"
						>
							<FaInstagram />
						</a>
						<a
							className={styles.outLink}
							href="https://wa.me/message/YTTEWVZXY6SXG1"
						>
							<FaWhatsapp />
						</a>
						<a
							className={styles.outLink}
							href="https://vk.com/gafurovproduction"
						>
							<SlSocialVkontakte />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BurgerMenu;
