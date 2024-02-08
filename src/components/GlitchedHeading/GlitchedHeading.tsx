import { FC } from 'react';
import styles from './GlitchedHeading.module.scss';

interface IGlitchedHeadingProps {
	heading: string;
	style?: React.CSSProperties | undefined;
}

const GlitchedHeading: FC<IGlitchedHeadingProps> = ({ style, heading }) => {
	return (
		<div className={styles.glitch} data-text={heading} style={style}>
			{heading}
		</div>
	);
};

export default GlitchedHeading;
