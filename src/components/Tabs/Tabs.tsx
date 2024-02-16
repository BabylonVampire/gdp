import { FC, useState } from 'react';
import { ITab } from '../../types/ITab';
import styles from './Tabs.module.scss';

interface ITabsProps {
	tabs: ITab[];
}

const Tabs: FC<ITabsProps> = ({ tabs }) => {
	const [currentTab, setTab] = useState<React.ReactNode>(tabs[0].component);

	return (
		<div className={styles.tabs}>
			<div className={styles.innerBox}>
				<div className={styles.cardPullSelection}>
					{tabs.map((tab) => {
						return (
							<div
								key={`tab_${tab.name}`}
								className={
									currentTab === tab.component
										? styles.changePullBtnActive
										: styles.changePullBtn
								}
								onClick={() => setTab(tab.component)}
							>
								{tab.name}
							</div>
						);
					})}
				</div>
				{currentTab}
			</div>
		</div>
	);
};

export default Tabs;
