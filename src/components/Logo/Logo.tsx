import { FC } from 'react';
import styles from './Logo.module.scss';

interface ILogo {}

const Logo: FC<ILogo> = ({}) => {
	return (
		<div className={styles.logoBox}>
			<p className={styles.__1}>Created by</p>
			<div className={styles.parts}>
				<p className={styles.__2}>GAFUROV</p>
				<p className={styles.__3}>Digital Production</p>
			</div>
		</div>
	);
};

export default Logo;
