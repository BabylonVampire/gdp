import { FC, memo } from 'react';
import styles from './Footer.module.scss';
import { ILink } from '../../../../types/ILink';
import Logo from '../../../Logo/Logo';
import { v4 } from 'uuid';

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
								<li key={v4()}>
									<a href={link.link} className={styles.link}>
										{link.heading}
									</a>
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
