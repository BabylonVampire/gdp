import { FC } from 'react';
import styles from './GlitchedHeading.module.scss';

interface IGlitchedHeadingProps {
	heading: string;
	fontSize: string;
	style?: React.CSSProperties | undefined;
}

const GlitchedHeading: FC<IGlitchedHeadingProps> = ({
	style,
	heading,
	fontSize,
}) => {
	return (
		<div
			className={styles.glitch}
			data-text={heading}
			style={Object.assign(
				{
					fontSize: fontSize,
					lineHeight: fontSize,
				},
				style
			)}
		>
			{heading}
		</div>
	);
};

export default GlitchedHeading;
