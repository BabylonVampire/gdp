import { FC, memo } from 'react';
import styles from './Footer.module.scss';
import { FaTelegram, FaYoutube, FaInstagram } from 'react-icons/fa6';
import { ILink } from '../../../../types/ILink';
import Logo from '../../../Logo/Logo';
import { v4 } from 'uuid';

interface IFooterProps {
	links: ILink[];
	phones: string[];
	emails: string[];
}

const Footer: FC<IFooterProps> = memo(({ links, phones, emails }) => {
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
						{phones.map((phone) => {
							return (
								<li className={styles.contact} key={v4()}>
									{phone}
								</li>
							);
						})}
						{emails.map((email) => {
							return (
								<li className={styles.contact} key={v4()}>
									{email}
								</li>
							);
						})}
					</ul>
					<ul className={styles.linksCol}>
						<div className={styles.colHeading}>Наши соцсети</div>
						<div className={styles.divider} />
						<li className={styles.outLink}>
							<FaTelegram />
						</li>
						<li className={styles.outLink}>
							<FaYoutube />
						</li>
						<li className={styles.outLink}>
							<FaInstagram />
						</li>
					</ul>
					{/* <div className={styles.otherCol}><Logo /></div> */}
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
