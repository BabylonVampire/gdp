import { FC } from 'react';
import styles from './PortfolioSection.module.scss';
import { ITab } from '../../../../types/ITab';
import Tabs from '../../../../components/Tabs/Tabs';

interface IPortfolioSectionProps {
	components: ITab[];
}

const PortfolioSection: FC<IPortfolioSectionProps> = ({ components }) => {
	return (
		<div className={styles.PortfolioSection}>
			<Tabs tabs={components} />
		</div>
	);
};

export default PortfolioSection;
