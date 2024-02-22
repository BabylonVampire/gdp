import { IPoint } from '../types/IPoint';
import { VscServerProcess } from 'react-icons/vsc';
import { GiTalk } from 'react-icons/gi';
import { IoVideocam } from 'react-icons/io5';
import { MdBusinessCenter } from 'react-icons/md';
import { BsGraphUpArrow } from 'react-icons/bs';

export const points: IPoint[] = [
	{
		point: {
			icon: <GiTalk />,
			heading: '',
			subText: '',
		},
		description: {
			heading: 'БРИФИНГ',
			description:
				'Ставим цели, анализируем ЦА и определяем концепцию, позиционирование бренда.',
		},
	},
	{
		point: {
			icon: <MdBusinessCenter />,
			heading: '',
			subText: '',
		},
		description: {
			heading: 'БРЕНДИНГ',
			description:
				'Воплощаем концепцию в жизнь, создавая имидж компании инструментами брендинга',
		},
	},
	{
		point: {
			icon: <VscServerProcess />,
			heading: '',
			subText: '',
		},
		description: {
			heading: 'РАЗРАБОТКА',
			description:
				'Создаем сайты и приложения, соблюдая фирменный стиль и задачи заказчика',
		},
	},
	{
		point: {
			icon: <IoVideocam />,
			heading: '',
			subText: '',
		},
		description: {
			heading: 'ВИДЕОПРОДАКШН',
			description:
				'Продюсируем рекламные ролики, интервью и контент для социальных сетей',
		},
	},
	{
		point: {
			icon: <BsGraphUpArrow />,
			heading: '',
			subText: '',
		},
		description: {
			heading: 'ПРОДВИЖЕНИЕ',
			description:
				'Обеспечиваем бизнес клиентами используя современные инструменты маркетинга',
		},
	},
];
