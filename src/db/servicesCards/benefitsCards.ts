import { ICard } from '../../types/ICard';
import { palette } from '../icons';

export const benefitsCards: ICard[] = [
	{
		heading: 'Максимальное качество',
		text: 'Наша команда гарантирует максимальный уровень качества за счет уровня компетентности наших сотрудников.',
		iconProps: {
			speed: palette.speed,
			gradient: palette.gradient,
			icon: palette.icon,
		},
	},
	{
		heading: 'Оптимальные сроки',
		text: 'Мы способны укладываться в кратчайшие сроки, вплоть до недели.',
		iconProps: {
			speed: palette.speed,
			gradient: palette.gradient,
			icon: palette.icon,
		},
	},
	{
		heading: 'Регулярная связь',
		text: 'Мы поддерживаем качественную связь с заказчиком на протяжении всей работы с консультацией на каждом этапе разработки',
		iconProps: {
			speed: palette.speed,
			gradient: palette.gradient,
			icon: palette.icon,
		},
	},
	{
		heading: 'Адекватная стоимость',
		text: 'Стоимость наших услуг не превышает среднюю по рынку за счет',
		iconProps: {
			speed: palette.speed,
			gradient: palette.gradient,
			icon: palette.icon,
		},
	},
];
