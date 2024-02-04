import { FC, memo } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { SlSocialVkontakte } from 'react-icons/sl';
import { v4 } from 'uuid';
import { ILink } from '../../../../types/ILink';
import styles from './Footer.module.scss';

interface IFooterProps {
	links: ILink[];
	contacts: {
		phones: string[];
		emails: string[];
	};
}

const Footer: FC<IFooterProps> = memo(({ links, contacts }) => {
	const date = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<div className={styles.FooterContainer}>
				<div className={styles.mainBox}>
					<ul className={styles.optionsCol}>
						<div className={styles.colHeading}>Навигация</div>
						<div className={styles.divider} />
						{links.map((link) => {
							return (
								<li className={styles.option} key={v4()}>
									<a href={link.link} className={styles.link}>
										{link.heading}
									</a>
								</li>
							);
						})}
					</ul>

					<ul className={styles.contactsCol}>
						<div className={styles.colHeading}>Контакты</div>
						<div className={styles.divider} />
						{contacts.phones.map((phone) => {
							return (
								<li className={styles.contact} key={v4()}>
									{phone}
								</li>
							);
						})}
						{contacts.emails.map((email) => {
							return (
								<li className={styles.contact} key={v4()}>
									{email}
								</li>
							);
						})}
					</ul>
					<div className={styles.linksCol}>
						<div className={styles.colHeading}>Наши соцсети</div>
						<div className={styles.divider} />
						<div className={styles.linkContainer}>
							{/* <a className={styles.outLink} href="">
								<FaTelegram />
							</a> */}
							{/* <a className={styles.outLink} href="">
								<FaYoutube />
							</a> */}
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
			<div className={styles.copyright}>
				<p>
					© {date} Все права защищены. Сделано компанией Gafurov
					digital Production
				</p>
			</div>
		</footer>
	);
});

export default Footer;
