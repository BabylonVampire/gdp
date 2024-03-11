import { FC } from 'react';
import { ILink } from '../../../../../types/ILink';
import styles from './BurgerMenu.module.scss';

interface IBurgerMenuProps {
	links: ILink[];
	state: boolean;
	setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ links, state, setState }) => {
	return (
		<div
			className={styles.BurgerMenu}
			style={{
				right: state ? '0' : '-50vw',
			}}
		>
			<div className={styles.innerBox}>
				<div className={styles.linkBox}>
					<div className={styles.heading}>Навигация</div>
					{links.map((link) => {
						return (
							<>
								<div className={styles.divider} />
								<a
									key={link.link + link.heading}
									href={link.link}
									className={styles.link}
									onClick={() => setState((prev) => !prev)}
								>
									{link.heading}
								</a>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default BurgerMenu;
