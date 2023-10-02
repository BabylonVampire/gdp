import { FC, useState } from 'react';
import styles from './ServicesSection.module.scss';
import { v4 } from 'uuid';

interface IServicesSectionProps {
	components: { component: React.ReactNode; name: string }[];
}

const ServicesSection: FC<IServicesSectionProps> = ({ components }) => {
	const [component, setComponent] = useState<React.ReactNode>(
		components[0].component
	);

	return (
		<div className={styles.ServicesSection} id="Services">
			<div className={styles.innerBox}>
				<div className={styles.cardPullSelection}>
					{components.map((com) => {
						return (
							<div
								key={v4()}
								className={styles.changePullBtn}
								onClick={() => setComponent(com.component)}
							>
								{com.name}
							</div>
						);
					})}
				</div>
				{component}
			</div>
		</div>
	);
};

export default ServicesSection;
