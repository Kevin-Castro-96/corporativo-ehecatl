import { Users, Shield, UserCheck, Filter } from 'lucide-react';
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
			label: 'Confirmados',
			value: stats.confirmed,
			icon: <UserCheck className='w-8 h-8 text-green-500' />,
			color: '#059669',
		},
		{
			label: 'Pendientes',
			value: stats.pending,
			icon: <Filter className='w-8 h-8 text-orange-500' />,
			color: '#ea580c',
		},
	];

	return (
		<div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
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
