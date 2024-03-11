import { FC } from 'react';
import styles from './ServicesSection.module.scss';
import Tabs from '../../../../components/Tabs/Tabs';
import { ITab } from '../../../../types/ITab';

interface IServicesSectionProps {
	components: ITab[];
}

const ServicesSection: FC<IServicesSectionProps> = ({ components }) => {
	return (
		<div className={styles.ServicesSection}>
			<Tabs tabs={components} />
		</div>
	);
};

export default ServicesSection;
