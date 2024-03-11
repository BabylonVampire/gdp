import DynamicIcon from '@components/DynamicIcon/DynamicIcon';
import { FC } from 'react';
import { IIcon } from '../../../../../../types/IIcon';
import { ITabContent } from '../../../../../../types/ITabContent';
import styles from './ServiceTab.module.scss';

interface IServiceTabProps {
	icon: IIcon;
	tabContent: ITabContent;
}

const ServiceTab: FC<IServiceTabProps> = ({ tabContent, icon }) => {
	return (
		<div className={styles.ServiceTab}>
			<div className={styles.backGround} />
			<div className={styles.innerBox}>
				<div className={styles.dynamicIconWrapper}>
					<DynamicIcon iconProps={icon} />
				</div>
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
											(listElement, i) => {
												return (
													<div
														key={
															i +
															listElement.description
														}
														className={
															styles.listElement
														}
													>
														<h2
															className={
																styles.listElementHeading
															}
														>
															{listElement.title}
														</h2>
														<p
															className={
																styles.listElementDescription
															}
														>
															{
																listElement.description
															}
														</p>
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
