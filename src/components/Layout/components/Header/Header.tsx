import { FC } from 'react';
import styles from './Header.module.scss';
import { ILink } from '../../../../types/ILink';
import { Link } from 'react-router-dom';

interface IHeaderProps {
	links: ILink[];
}

const Header: FC<IHeaderProps> = ({ links }) => {
	return (
		<div className={styles.header}>
			<span className={styles.flare} />
			<div className={styles.linkBox}>
				{links.map((link) => {
					return (
						<Link to={link.link} className={styles.link}>
							{link.heading}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Header;
