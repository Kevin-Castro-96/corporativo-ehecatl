import {
	Users,
	Shield,
	BriefcaseBusiness,
	// CreditCard,
} from 'lucide-react';
import { COLORS } from '@/app/constants/colors';
import { UserStats } from './types';

interface UserStatsCardsProps {
	stats: UserStats;
}

export default function UserStatsCards({ stats }: UserStatsCardsProps) {
	const statsConfig = [
		{
			label: 'Total Usuarios',
			value: stats.total,
			icon: <Users className='w-8 h-8' style={{ color: COLORS.primary }} />,
			color: COLORS.primary,
		},
		{
			label: 'Administradores',
			value: stats.admins,
			icon: <Shield className='w-8 h-8' style={{ color: COLORS.secondary }} />,
			color: COLORS.secondary,
		},
		{
			label: 'Clientes',
			value: stats.clientes,
			icon: <Users className='w-8 h-8' style={{ color: COLORS.accent }} />,
			color: COLORS.accent,
		},
		{
			label: 'Trabajadores',
			value: stats.trabajadores,
			icon: <BriefcaseBusiness className='w-8 h-8 text-blue-500' />,
			color: '#3b82f6',
		},
		// {
		// 	label: 'Trabajadores Pagos',
		// 	value: stats.workersWithPay,
		// 	icon: <CreditCard className='w-8 h-8 text-emerald-500' />,
		// 	color: '#10b981',
		// },
	];

	return (
		<div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
			{statsConfig.map((stat, index) => (
				<div
					key={index}
					className='bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300'
				>
					<div className='flex items-center justify-between'>
						<div>
							<p className='text-sm font-medium' style={{ color: stat.color }}>
								{stat.label}
							</p>
							<p className='text-2xl font-bold text-gray-900'>{stat.value}</p>
						</div>
						{stat.icon}
					</div>
				</div>
			))}
		</div>
	);
}
