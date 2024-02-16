import { FC } from 'react';
import styles from './ServiceTab.module.scss';
import DynamicIcon from '@components/DynamicIcon/DynamicIcon';
import { IIcon } from '../../../../../../types/IIcon';
import { ITabContent } from '../../../../../../types/ITabContent';
import { useAppSelector } from '../../../../../../store/hooks/redux';
import DroppingText from '@components/DroppingText/DroppingText';

interface IServiceTabProps {
	icon: IIcon;
	tabContent: ITabContent;
}

const ServiceTab: FC<IServiceTabProps> = ({ tabContent, icon }) => {
	const { theme } = useAppSelector((state) => state.themeReducer);
	return (
		<div className={styles.ServiceTab}>
			<div
				className={styles.backGround}
				style={{
					filter: theme.id === 0 ? 'invert(0)' : 'invert(1)',
					WebkitFilter: theme.id === 0 ? 'invert(0)' : 'invert(1)',
				}}
			/>
			<div className={styles.innerBox}>
				<DynamicIcon iconProps={icon} />
				<div className={styles.contentBox}>
					{tabContent.tabContent.map((paragraph) => {
						switch (paragraph.type) {
							case 'list':
								return (
									<div
										className={styles.paragraphList}
										key={
											paragraph.type +
											paragraph.content[0].title
										}
									>
										{paragraph.content.map(
											(listElement) => {
												return (
													<div
														key={
															listElement.description
														}
														className={
															styles.listElement
														}
													>
														<DroppingText
															preview={
																listElement.title
															}
															droppingText={
																listElement.description
															}
														/>
													</div>
												);
											}
										)}
									</div>
								);

							case 'heading':
								return (
									<div
										className={styles.paragraphHeading}
										key={
											paragraph.type +
											paragraph.content[0].title
										}
									>
										{paragraph.content[0].title}
									</div>
								);

							case 'text':
								return (
									<div
										className={styles.paragraphText}
										key={
											paragraph.type +
											paragraph.content[0].title
										}
									>
										{paragraph.content[0].title}
									</div>
								);

							default:
								return <></>;
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default ServiceTab;
