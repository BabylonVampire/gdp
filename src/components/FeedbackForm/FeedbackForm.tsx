import { useState } from 'react';
import styles from './FeedbackForm.module.scss';
import { Checkbox, Input } from 'antd';
import emailjs from '@emailjs/browser';
import { classNames } from '../utils/classNames';

const FeedbackForm = () => {
	const [name, setName] = useState<string | undefined>();
	const [email, setEmail] = useState<string | undefined>();
	const [message, setMessage] = useState<string | undefined>('');
	const [acceptAgreement, setAcceptAgreement] = useState<boolean>(false);

	const [blinkFields, setBlinkFields] = useState<boolean>(false);

	const toggleBlinkFields = () => {
		if (blinkFields) {
			return;
		}

		setBlinkFields(true);

		setTimeout(() => {
			setBlinkFields(false);
			setFilledFields({
				name: true,
				email: true,
				acceptAgreement: true,
			});
		}, 1000);
	};

	const [filledFields, setFilledFields] = useState({
		name: true,
		email: true,
		acceptAgreement: true,
	});

	const SERVICE_ID = 'service_q70p2vb';
	const TEMPLATE_ID = 'template_61tzang';
	const PUBLIC_KEY = 'Uj0KTkPXkDekWxNX1';

	const onSubmit = () => {
		if (name && email && acceptAgreement) {
			emailjs.send(
				SERVICE_ID,
				TEMPLATE_ID,
				{ name: name, email: email, message: message },
				PUBLIC_KEY
			);

			setName('');
			setEmail('');
			setMessage('');
		} else {
			toggleBlinkFields();
			setFilledFields({
				name: Boolean(name?.length),
				email: Boolean(email?.length),
				acceptAgreement: acceptAgreement,
			});
		}

		return;
	};

	return (
		<div className={styles.feedbackForm}>
			<div className={styles.innerBox}>
				<Input
					size="large"
					placeholder="Имя"
					className={classNames(styles.formInput, {}, [
						!filledFields.name ? styles.notFilledField : '',
					])}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					size="large"
					placeholder="Email"
					className={classNames(styles.formInput, {}, [
						!filledFields.email ? styles.notFilledField : '',
					])}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					size="large"
					placeholder="Сообщение"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<div className={styles.checkBoxContainer}>
					<Checkbox
						checked={acceptAgreement}
						onChange={() => setAcceptAgreement((prev) => !prev)}
						className={classNames(
							styles.acceptPersonalAgreement,
							{},
							[
								!filledFields.acceptAgreement
									? styles.notFilledField
									: '',
							]
						)}
					/>
					<span className={styles.checkBoxDescription}>
						я даю согласие на{' '}
						<span>
							<a
								className={styles.personalAgreementLink}
								href="gafurov-production/assets/personalAgreement.pdf"
								download
							>
								обработку персональных данных
							</a>
						</span>
					</span>
				</div>
				<button className={styles.submitButton} onClick={onSubmit}>
					Отправить
				</button>
			</div>
		</div>
	);
};

export default FeedbackForm;
