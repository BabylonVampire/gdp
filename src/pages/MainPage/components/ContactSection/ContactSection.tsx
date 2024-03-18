import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { SlSocialVkontakte } from 'react-icons/sl';
import styles from './ContactSection.module.scss';
import { contacts } from '../../../../db/contacts';
import FeedbackForm from '../../../../components/FeedbackForm/FeedbackForm';

const ContactSection = () => {
	return (
		<div className={styles.contactSection}>
			<div className={styles.innerBox}>
				<div className={styles.contactBox}>
					<h2 className={styles.heading}>Свяжитесь с нами</h2>
					<p className={styles.description}>
						Оставьте заявку через сайт или свяжитесь с нами в
						мессенджере:
					</p>
					<p className={styles.email}>{contacts.emails[0]}</p>
					<p className={styles.phone}>{contacts.phones[0]}</p>
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
				<div className={styles.feedbackForm}>
					<p className={styles.feedbackFormHeading}>
						Мы свяжемся с вами в ближайшее время!
					</p>
					<FeedbackForm />
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
