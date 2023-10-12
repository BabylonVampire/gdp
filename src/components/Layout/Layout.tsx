import { FC, PropsWithChildren, memo } from 'react';
import styles from './layout.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ThemeProvider from '../ThemeProvider/ThemeProvider';

const Layout: FC<PropsWithChildren> = memo(({ children }) => {
	const links = [
		{
			heading: 'Главная',
			link: '#home',
		},
		{
			heading: 'О Нас',
			link: '#about',
		},
		{
			heading: 'Услуги',
			link: '#Services',
		},
		{
			heading: 'Контакты',
			link: '#contacts',
		},
	];
	return (
		<div className={styles.layout}>
			<ThemeProvider>
				<Header links={links} />
				{children}
				<Footer
					links={links}
					phones={['+7 926 (082) 09-75', '+7 926 (082) 09-75']}
					emails={[
						'nikitatabalov@gmail.com',
						'nikitatabalov@gmail.com',
					]}
				/>
			</ThemeProvider>
		</div>
	);
});

export default Layout;
