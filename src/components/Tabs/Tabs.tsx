import { FC, useState } from 'react';
import styles from './Tabs.module.scss';
import { v4 } from 'uuid';
import { ITab } from '../../types/ITab';

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
								key={v4()}
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
