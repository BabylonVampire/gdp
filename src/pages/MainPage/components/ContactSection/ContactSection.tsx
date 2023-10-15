import { FC, useState } from 'react';
import { FaPhone, FaPhoneVolume } from 'react-icons/fa6';
import { AiOutlineLink } from 'react-icons/ai';
import { HiMail, HiMailOpen } from 'react-icons/hi';
import styles from './ContactSection.module.scss';
import RollingContact from './components/RollingContact/RollingContact';
import Button from '../../../../GlassUI/Button/Button';
import { classNames } from '../../../../components/utils/classNames';

interface IContactSectionProps {}

const ContactSection: FC<IContactSectionProps> = ({}) => {
	const [showPhone, setShowPhone] = useState<boolean>(false);
	const [showEmail, setShowEmail] = useState<boolean>(false);
	const [showSocialNetworks, setShowSocialNetworks] =
		useState<boolean>(false);

	return (
		<div className={styles.contactSection} id="contacts">
			<div className={styles.innerBox}>
				<div className={styles.contactBox}>
					<div className={styles.phones}>
						<Button
							className={classNames(styles.phoneIcon, {}, [
								!showPhone ? styles.glowingBtn : '',
							])}
							style={{
								cursor: showPhone ? 'auto' : 'pointer',
							}}
							onClick={() => setShowPhone(true)}
						>
							{showPhone ? <FaPhoneVolume /> : <FaPhone />}
						</Button>
						<RollingContact
							text="+7 (926) 082 09-75"
							regExp={/[A-Za-z]/}
							start={showPhone}
						/>
					</div>
					<div className={styles.email}>
						<Button
							className={classNames(styles.emailIcon, {}, [
								!showEmail ? styles.glowingBtn : '',
							])}
							style={{
								cursor: showEmail ? 'auto' : 'pointer',
							}}
							onClick={() => setShowEmail(true)}
						>
							{showEmail ? <HiMailOpen /> : <HiMail />}
						</Button>
						<RollingContact
							text="nikitatabalov@gmail.com"
							regExp={/[A-Za-z]/}
							start={showEmail}
						/>
					</div>
					<div className={styles.socialNetwork}>
						<Button
							className={styles.linkIcon}
							onClick={() => setShowSocialNetworks(true)}
							style={{
								cursor: showSocialNetworks ? 'auto' : 'pointer',
							}}
						>
							<AiOutlineLink />
						</Button>
						<div className={styles.links}>
							<a
								className={styles.youtube}
								style={{
									opacity: showSocialNetworks ? 1 : 0,
									cursor: !showSocialNetworks
										? 'auto'
										: 'pointer',
								}}
							>
								<div className={styles.triangle} />
							</a>
							<a
								className={styles.instagram}
								style={{
									left: showSocialNetworks
										? 'calc(var(--index) * 7)'
										: '0',
									opacity: showSocialNetworks ? 1 : 0,
									cursor: !showSocialNetworks
										? 'auto'
										: 'pointer',
								}}
							>
								<div className={styles.bigCircle} />
								<div className={styles.smallCircle} />
							</a>
							<a
								className={styles.telegram}
								style={{
									left: showSocialNetworks
										? 'calc(var(--index) * 12)'
										: '0',
									opacity: showSocialNetworks ? 1 : 0,
									cursor: !showSocialNetworks
										? 'auto'
										: 'pointer',
								}}
							>
								<div className={styles.telegramIconGap} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
