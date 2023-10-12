import { FC, PropsWithChildren, memo } from 'react';
import styles from './layout.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ThemeProvider from '../ThemeProvider/ThemeProvider';
import { links } from '@db/links';
import { contacts } from '@db/contacts';

const Layout: FC<PropsWithChildren> = memo(({ children }) => {
	return (
		<div className={styles.layout}>
			<ThemeProvider>
				<Header links={links} />
				{children}
				<Footer links={links} contacts={contacts} />
			</ThemeProvider>
		</div>
	);
});

export default Layout;
