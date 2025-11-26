import { COLORS } from '@/app/constants/colors';
import { UserProfile } from './types';
import { Trash2 } from 'lucide-react';

interface UserTableProps {
	users: UserProfile[];
	onRoleChange: (userId: string, newRole: string) => void;
	onPayToggle?: (userId: string, currentPay: boolean) => void;
	onDeleteUser?: (userId: string, userName: string) => void;
	isWorkerSection?: boolean;
}

const getSpecialityLabel = (speciality: string) => {
	const labels = {
		plomeria: 'Plomería',
		jardineria: 'Jardinería',
		electricista: 'Electricista',
		inmobiliaria: 'Inmobiliaria',
	};
	return labels[speciality as keyof typeof labels] || speciality;
};

export default function UserTable({
	users,
	onRoleChange,
	onPayToggle,
	onDeleteUser,
	isWorkerSection = false,
}: UserTableProps) {
	if (users.length === 0) {
		return (
			<div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
				<div className='px-8 py-6 border-b border-gray-200'>
					<h2 className='text-2xl font-bold text-gray-900'>
						{isWorkerSection
							? 'Trabajadores Registrados (0)'
							: 'Usuarios Registrados (0)'}
					</h2>
				</div>
				<div className='text-center py-12'>
					<p className='text-gray-500 text-lg'>
						No se encontraron {isWorkerSection ? 'trabajadores' : 'usuarios'}
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
			<div className='px-8 py-6 border-b border-gray-200'>
				<h2 className='text-2xl font-bold text-gray-900'>
					{isWorkerSection
						? `Trabajadores Registrados (${users.length})`
						: `Usuarios Registrados (${users.length})`}{' '}
				</h2>
			</div>

			<div className='overflow-x-auto'>
				<table className='w-full'>
					<thead className='bg-gray-50'>
						<tr>
							<th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								{isWorkerSection ? 'Trabajador' : 'Usuario'}
							</th>
							<th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Email
							</th>
							<th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Teléfono
							</th>
							{isWorkerSection && (
								<th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Especialidad
								</th>
							)}
							{isWorkerSection && (
								<th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Estado Pago
								</th>
							)}
							{!isWorkerSection && (
								<th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
									Rol
								</th>
							)}
							<th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Registro
							</th>
							<th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Acciones
							</th>
						</tr>
					</thead>
					<tbody className='bg-white divide-y divide-gray-200'>
						{users.map((user) => (
							<tr key={user.id} className='hover:bg-gray-50 transition-colors'>
								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='text-sm font-medium text-gray-900'>
										{user.nombre} {user.apellido}
									</div>
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
									{user.email}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
									{user.telefono}
								</td>

								{isWorkerSection && (
									<td className='px-6 py-4 whitespace-nowrap'>
										<span className='inline-flex px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800'>
											{user.speciality && getSpecialityLabel(user.speciality)}
										</span>
									</td>
								)}

								{isWorkerSection && (
									<td className='px-6 py-4 whitespace-nowrap'>
										<select
											value={user.pay ? 'pagado' : 'pendiente'}
											onChange={(e) =>
												onPayToggle &&
												onPayToggle(user.id, e.target.value === 'pendiente')
											}
											className={`px-3 py-1 text-xs font-medium rounded-lg border focus:outline-none focus:ring-2 transition-colors ${
												user.pay
													? 'bg-green-50 text-green-800 border-green-200 focus:ring-green-500'
													: 'bg-red-50 text-red-800 border-red-200 focus:ring-red-500'
											}`}
										>
											<option value='pagado'>Pagado</option>
											<option value='pendiente'>Pendiente</option>
										</select>
									</td>
								)}

								{!isWorkerSection && (
									<td className='px-6 py-4 whitespace-nowrap'>
										<span
											className='inline-flex px-3 py-1 text-xs font-medium rounded-full text-white'
											style={{
												backgroundColor:
													user.role === 'admin'
														? COLORS.primary
														: user.role === 'trabajador'
														? '#3b82f6'
														: COLORS.accent,
											}}
										>
											{user.role === 'admin'
												? 'Administrador'
												: user.role === 'trabajador'
												? 'Trabajador'
												: 'Cliente'}
										</span>
									</td>
								)}
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
									{new Date(user.created_at).toLocaleDateString()}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
									<div className='flex items-center gap-2'>
										{!isWorkerSection && (
											<select
												value={user.role}
												onChange={(e) => onRoleChange(user.id, e.target.value)}
												className='text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2'
											>
												<option value='cliente'>Cliente</option>
												<option value='trabajador'>Trabajador</option>
												<option value='admin'>Admin</option>
											</select>
										)}
										{isWorkerSection && (
											<span className='text-sm text-gray-500'>Trabajador</span>
										)}

										<button
											onClick={() =>
												onDeleteUser &&
												onDeleteUser(user.id, `${user.nombre} ${user.apellido}`)
											}
											className='p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer'
											title='Eliminar usuario'
										>
											<Trash2 className='w-4 h-4' />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
