import { regExpToArray } from '@components/utils/regExpToArray';
import { FC, useEffect, useMemo, useState } from 'react';
import LetterColumn from './LetterColumn/LetterColumn';
import styles from './RollingContact.module.scss';

interface IRollingContactProps {
	text: string;
	regExp: RegExp;
	start: boolean;
	href?: string;
}

const RollingContact: FC<IRollingContactProps> = ({
	text,
	regExp,
	start,
	href = '',
}) => {
	const alphabet: string[] = useMemo(() => regExpToArray(regExp), [regExp]);
	const [startAnim, setStart] = useState<boolean>(false);
	useEffect(() => {
		setStart(start);
	}, [start]);
	return (
		<div className={styles.rollingContact}>
			<div className={styles.innerBox}>
				{start && (
					<a className={styles.linkBox} href={href}>
						{text.split('').map((letter, index) => {
							return (
								<LetterColumn
									key={`${letter}_${index}_${text}`}
									columnKey={text}
									defaultLetter={letter}
									alphabet={alphabet}
									start={startAnim}
								/>
							);
						})}
					</a>
				)}
			</div>
		</div>
	);
};

export default RollingContact;
