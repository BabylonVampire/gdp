import { FC, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail, HiMailOpen } from 'react-icons/hi';
import styles from './ContactSection.module.scss';
// import WritingPhone from '../../../../components/WritingPhone/WritingPhone';

interface IContactSectionProps {}

const ContactSection: FC<IContactSectionProps> = ({}) => {
	const [showPhone, setShowPhone] = useState<boolean>(false);
	const [showEmail, setShowEmail] = useState<boolean>(false);

	return (
		<div className={styles.contactSection}>
			<div className={styles.innerBox}>
				<div className={styles.phones}>
					<div
						className={styles.phoneIcon}
						style={{
							cursor: showPhone ? 'auto' : 'pointer',
						}}
						onClick={() => setShowPhone(true)}
					>
						<FaPhoneAlt />
					</div>
				</div>
				<div className={styles.email}>
					<div
						className={styles.emailIcon}
						style={{
							cursor: showEmail ? 'auto' : 'pointer',
						}}
						onClick={() => setShowEmail(true)}
					>
						{showEmail ? <HiMailOpen /> : <HiMail />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
