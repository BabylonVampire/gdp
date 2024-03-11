import { FC, PropsWithChildren } from 'react';
import styles from './CarouselSlide.module.scss';
import { classNames } from '../../../../../../components/utils/classNames';

interface ICarouselSlideProps {
	toggleModal: () => void;
	setModalContent: () => void;
	allowPointerEvents?: boolean;
}

const CarouselSlide: FC<PropsWithChildren<ICarouselSlideProps>> = ({
	children,
	toggleModal,
	setModalContent,
	allowPointerEvents = false,
}) => {
	const onClick = () => {
		setModalContent();
		toggleModal();
	};
	return (
		<div className={styles.carouselSlide} onClick={onClick}>
			<div
				className={classNames(styles.childWrapper, {}, [
					!allowPointerEvents ? styles.disablePointerEvents : '',
				])}
			>
				{children}
			</div>
		</div>
	);
};

export default CarouselSlide;
