import { FC, memo } from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { ILink } from '../../../../types/ILink';
import Logo from '../../../Logo/Logo';

interface IFooterProps {
	links: ILink[];
}

const Footer: FC<IFooterProps> = memo(({ links }) => {
	const date = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<div className={styles.FooterContainer}>
				<div className={styles.mainBox}>
					<ul className={styles.optionsCol}>
						{links.map((link) => {
							return (
								<li>
									<Link
										to={link.link}
										className={styles.link}
									>
										{link.heading}
									</Link>
								</li>
							);
						})}
					</ul>
					<ul className={styles.contactsCol}></ul>
					<div className={styles.otherCol}>{/* <Logo /> */}</div>
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
