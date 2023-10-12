import { FC, useEffect, useMemo, useState } from 'react';
import styles from './RollingContact.module.scss';
import LetterColumn from './LetterColumn/LetterColumn';
import { regExpToArray } from '@components/utils/regExpToArray';
import { v4 } from 'uuid';

interface IRollingContactProps {
	text: string;
	regExp: RegExp;
	start: boolean;
}

const RollingContact: FC<IRollingContactProps> = ({ text, regExp, start }) => {
	const alphabet: string[] = useMemo(() => regExpToArray(regExp), [regExp]);
	const [startAnim, setStart] = useState<boolean>(false);
	useEffect(() => {
		setStart(start);
	}, [start]);
	return (
		<div className={styles.rollingContact}>
			<div className={styles.innerBox}>
				{text.split('').map((letter, index) => {
					return (
						<LetterColumn
							key={`${letter} ${index} ${text}`}
							defaultLetter={letter}
							alphabet={alphabet}
							start={startAnim}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default RollingContact;
