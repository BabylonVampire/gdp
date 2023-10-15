import { FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import { classNames } from '../../components/utils/classNames';

interface BaseButtonProps {}

type MergedHTMLAttributes = Omit<
	React.HTMLAttributes<HTMLElement> &
		React.ButtonHTMLAttributes<HTMLElement> &
		React.AnchorHTMLAttributes<HTMLElement>,
	'type'
>;

interface IButtonProps extends BaseButtonProps, MergedHTMLAttributes {}

const Button: FC<PropsWithChildren<IButtonProps>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button
			className={classNames(styles.Button, {}, [
				className ? className : '',
			])}
			{...rest}
		>
			<span className={styles.flare} />
			{children}
		</button>
	);
};

export default Button;
