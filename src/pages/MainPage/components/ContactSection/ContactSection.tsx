import { AiOutlineLink } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram, FaPhone } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';
import { SlSocialVkontakte } from 'react-icons/sl';
import Button from '../../../../GlassUI/Button/Button';
import { classNames } from '../../../../components/utils/classNames';
import styles from './ContactSection.module.scss';

const ContactSection = () => {
	return (
		<div className={styles.contactSection}>
			<div className={styles.innerBox}>
				<div className={styles.contactBox}>
					<div className={styles.phones}>
						<Button
							className={classNames(styles.phoneIcon, {}, [
								styles.glowingBtn_1,
							])}
						>
							<FaPhone />
						</Button>
						<a href="tel:+79938917747" className={styles.link}>
							+7 (993) 891-77-47
						</a>
					</div>
					<div className={styles.email}>
						<Button
							className={classNames(styles.emailIcon, {}, [
								styles.glowingBtn_2,
							])}
						>
							<HiMail />
						</Button>
						<a
							href="mailto:info@gafurovproduction.ru"
							className={styles.link}
						>
							info@gafurovproduction.ru
						</a>
					</div>
					<div className={styles.socialNetwork}>
						<Button
							className={classNames(styles.linkIcon, {}, [
								styles.glowingBtn_3,
							])}
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
							>
								<FaWhatsapp />
							</a>
							<a
								href="https://www.instagram.com/gafurovproduction?igsh=N3R6dXdtemg2czRs"
								className={styles.instagram}
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
