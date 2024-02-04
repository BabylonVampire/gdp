import { FaHandshake, FaRegClock } from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';
import { SiRubygems } from 'react-icons/si';
import { ICard } from '../../types/ICard';

export const benefitsCards: ICard[] = [
	{
		heading: 'Максимальное качество',
		text: 'Наша команда гарантирует максимальный уровень качества за счет уровня компетентности наших сотрудников.',
		Icon: <SiRubygems />,
	},
	{
		heading: 'Оптимальные сроки',
		text: 'Мы способны укладываться в кратчайшие сроки, вплоть до недели.',
		Icon: <FaRegClock />,
	},
	{
		heading: 'Регулярная связь',
		text: 'Мы поддерживаем качественную связь с заказчиком на протяжении всей работы с консультацией на каждом этапе разработки',
		Icon: <FaRegMessage />,
	},
	{
		heading: 'Адекватная стоимость',
		text: 'Стоимость наших услуг не превышает среднюю по рынку за счет',
		Icon: <FaHandshake />,
	},
];
