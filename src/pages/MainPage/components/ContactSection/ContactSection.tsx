import { useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram, FaPhone, FaPhoneVolume } from 'react-icons/fa6';
import { HiMail, HiMailOpen } from 'react-icons/hi';
import { SlSocialVkontakte } from 'react-icons/sl';
import Button from '../../../../GlassUI/Button/Button';
import { classNames } from '../../../../components/utils/classNames';
import styles from './ContactSection.module.scss';
import RollingContact from './components/RollingContact/RollingContact';

const ContactSection = () => {
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
							text="+7 (993) 891-77-47"
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
							text="info@gafurovproduction.ru"
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
							{/* <a
								className={styles.youtube}
								style={{
									opacity: showSocialNetworks ? 1 : 0,
									cursor: !showSocialNetworks
										? 'auto'
										: 'pointer',
								}}
							>
								<FaYoutube />
							</a> */}
							<a
								href="https://wa.me/message/YTTEWVZXY6SXG1"
								className={styles.whatsApp}
								style={{
									opacity: showSocialNetworks ? 1 : 0,
									cursor: !showSocialNetworks
										? 'auto'
										: 'pointer',
								}}
							>
								<FaWhatsapp />
							</a>
							<a
								href="https://www.instagram.com/gafurovproduction?igsh=N3R6dXdtemg2czRs"
								className={styles.instagram}
								style={{
									left: showSocialNetworks
										? 'calc(var(--index) * 5)'
										: '0',
									opacity: showSocialNetworks ? 1 : 0,
									cursor: !showSocialNetworks
										? 'auto'
										: 'pointer',
								}}
							>
								<FaInstagram />
							</a>
							{/* <a
								href=""
								className={styles.telegram}
								style={{
									left: showSocialNetworks
										? 'calc(var(--index) * 10)'
										: '0',
									opacity: showSocialNetworks ? 1 : 0,
									cursor: !showSocialNetworks
										? 'auto'
										: 'pointer',
								}}
							>
								<FaTelegram />
							</a> */}
							<a
								href="https://vk.com/gafurovproduction"
								className={styles.vkontakte}
								style={{
									left: showSocialNetworks
										? 'calc(var(--index) * 10)'
										: '0',
									opacity: showSocialNetworks ? 1 : 0,
									cursor: !showSocialNetworks
										? 'auto'
										: 'pointer',
								}}
							>
								<SlSocialVkontakte />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
