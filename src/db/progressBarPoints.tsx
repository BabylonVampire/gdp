import { IPoint } from '../types/IPoint';
import { VscServerProcess } from 'react-icons/vsc';
import { GiConversation } from 'react-icons/gi';
import { IoVideocam } from 'react-icons/io5';
import { MdBusinessCenter } from 'react-icons/md';
import { BsGraphUpArrow } from 'react-icons/bs';

export const points: IPoint[] = [
	{
		point: {
			icon: <GiConversation />,
			heading: 'БРИФИНГ',
			subText: '',
		},
		description: {
			heading: '',
			description:
				'Ставим цели, анализируем ЦА и определяем концепцию, позиционирование бренда.',
		},
	},
	{
		point: {
			icon: <MdBusinessCenter />,
			heading: 'БРЕНДИНГ',
			subText: '',
		},
		description: {
			heading: '',
			description:
				'Воплощаем концепцию в жизнь, создавая имидж компании инструментами брендинга',
		},
	},
	{
		point: {
			icon: <VscServerProcess />,
			heading: 'РАЗРАБОТКА',
			subText: '',
		},
		description: {
			heading: '',
			description:
				'Создаем сайты и приложения, соблюдая фирменный стиль и задачи заказчика',
		},
	},
	{
		point: {
			icon: <IoVideocam />,
			heading: 'ВИДЕОПРОДАКШН',
			subText: '',
		},
		description: {
			heading: '',
			description:
				'Продюсируем рекламные ролики, интервью и контент для социальных сетей',
		},
	},
	{
		point: {
			icon: <BsGraphUpArrow />,
			heading: 'ПРОДВИЖЕНИЕ',
			subText: '',
		},
		description: {
			heading: '',
			description:
				'Обеспечиваем бизнес клиентами используя современные инструменты маркетинга',
		},
	},
];
