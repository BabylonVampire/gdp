import { FC, useState } from 'react';
import styles from './DroppingText.module.scss';
import { IoMdArrowDropright } from 'react-icons/io';

interface IDroppingTextProps {
	preview: string;
	droppingText: string;
	initialState?: boolean | undefined;
	setStateFunc?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DroppingText: FC<IDroppingTextProps> = ({
	preview,
	droppingText,
	initialState,
	setStateFunc,
}) => {
	const [drop, setDrop] = useState<boolean>(initialState || false);
	const changeDrop = () => {
		if (!setStateFunc) setDrop((prev) => !prev);
		else setStateFunc((prev) => !prev);
	};
	return (
		<div className={styles.droppingText} onClick={changeDrop}>
			<IoMdArrowDropright
				style={{
					rotate: drop ? '90deg' : '0deg',
					color: 'var(--font-color-code)',
					transition: '0.2s',
				}}
			/>
			{preview}
			<div
				className={styles.text}
				style={{ maxHeight: drop ? '4lh' : '0' }}
			>
				<div className={styles.thinDivider} />
				{droppingText}
			</div>
		</div>
	);
};

export default DroppingText;
