import { FC } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { ILink } from '../../../../types/ILink';
import styles from './Header.module.scss';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { contacts } from '../../../../db/contacts';

interface IHeaderProps {
	links: ILink[];
	burgerState: boolean;
	burgerCallBack: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<IHeaderProps> = ({ links, burgerCallBack, burgerState }) => {
	return (
		<div
			className={styles.header}
			style={{
				top: burgerState ? '-5em' : '0',
			}}
		>
			<span className={styles.flare} />
			<div className={styles.mobileDisplay}>
				<button
					className={styles.openBurger}
					onClick={() => burgerCallBack((prev) => !prev)}
				>
					<HiOutlineMenu />
				</button>
			</div>
			<div className={styles.pcDisplay}>
				<div className={styles.linkBox}>
					{links.map((link) => {
						return (
							<a
								className={styles.link}
								href={link.link}
								key={`header_${link.heading}_${link.link}`}
							>
								{link.heading}
							</a>
						);
					})}
				</div>
				<div className={styles.outLinksBox}>
					<a className={styles.phone} href="tel:+79938917747">
						{contacts.phones[0]}
					</a>
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
	);
};

export default Header;
