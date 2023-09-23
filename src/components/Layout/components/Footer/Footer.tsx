import { FC, memo } from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

interface IFooterProps {}

const Footer: FC<IFooterProps> = memo(() => {
	const date = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<div className={styles.FooterContainer}>
				<div className={styles.mainBox}>
					<ul className={styles.optionsCol}>
						<li>
							<Link to="/" className={styles.link}>
								Главная
							</Link>
						</li>
						<li>
							<Link to="/favor" className={styles.link}>
								Услуги
							</Link>
						</li>
						<li>
							<Link to="/about" className={styles.link}>
								О нас
							</Link>
						</li>
						<li>
							<Link to="/articles" className={styles.link}>
								Статьи
							</Link>
						</li>
						<li>
							<Link to="/partners" className={styles.link}>
								Партнерам
							</Link>
						</li>
						<li>
							<Link to="/contacts" className={styles.link}>
								Контакты
							</Link>
						</li>
					</ul>
					<ul className={styles.contactsCol}></ul>
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
