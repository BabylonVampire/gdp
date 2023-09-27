import { FC, PropsWithChildren, memo } from 'react';
import styles from './layout.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Layout: FC<PropsWithChildren> = memo(({ children }) => {
	const links = [
		{
			heading: 'Главная',
			link: '/',
		},
		{
			heading: 'О Нас',
			link: '/',
		},
		{
			heading: 'Услуги',
			link: '/',
		},
		{
			heading: 'Контакты',
			link: '/',
		},
		{
			heading: 'Партнерам',
			link: '/',
		},
	];
	return (
		<div className={styles.layout}>
			<Header links={links} />
			{children}
			<Footer links={links} />
		</div>
	);
});

export default Layout;
