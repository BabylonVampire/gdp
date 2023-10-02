import { FC } from 'react';
import styles from './Header.module.scss';
import { ILink } from '../../../../types/ILink';
import Logo from '../../../Logo/Logo';
import { v4 } from 'uuid';

interface IHeaderProps {
	links: ILink[];
}

const Header: FC<IHeaderProps> = ({ links }) => {
	return (
		<div className={styles.header}>
			<span className={styles.flare} />
			{/* <Logo /> */}
			<div className={styles.linkBox}>
				{links.map((link) => {
					return (
						<a className={styles.link} href={link.link} key={v4()}>
							{link.heading}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Header;
