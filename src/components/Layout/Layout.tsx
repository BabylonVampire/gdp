import { FC, PropsWithChildren, memo, useEffect, useState } from 'react';
import styles from './layout.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { links } from '@db/links';
import { contacts } from '@db/contacts';
import BurgerMenu from './components/Header/BurgerMenu/BurgerMenu';

const Layout: FC<PropsWithChildren> = memo(({ children }) => {
	const [burger, setBurger] = useState<boolean>(false);

	useEffect(() => {
		document.body.style.overflowY = burger ? 'hidden' : 'auto';
	}, [burger]);

	return (
		<div className={styles.layout}>
			<BurgerMenu links={links} state={burger} setState={setBurger} />
			<div
				className={styles.mainLayoutBox}
				style={{
					right: burger ? '50vw' : '0',
				}}
				onClick={burger ? () => setBurger((prev) => !prev) : () => {}}
			>
				<Header
					links={links}
					burgerCallBack={setBurger}
					burgerState={burger}
				/>
				{children}
				<Footer links={links} contacts={contacts} />
			</div>
		</div>
	);
});

export default Layout;
