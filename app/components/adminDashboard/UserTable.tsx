import { COLORS } from '@/app/constants/colors';
import { UserProfile } from './types';

interface UserTableProps {
	users: UserProfile[];
	onRoleChange: (userId: string, newRole: string) => void;
}

export default function UserTable({ users, onRoleChange }: UserTableProps) {
	if (users.length === 0) {
		return (
			<div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
				<div className='px-8 py-6 border-b border-gray-200'>
					<h2 className='text-2xl font-bold text-gray-900'>
						Usuarios Registrados (0)
					</h2>
				</div>
				<div className='text-center py-12'>
					<p className='text-gray-500 text-lg'>No se encontraron usuarios</p>
				</div>
			</div>
		);
	}

	return (
		<div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
			<div className='px-8 py-6 border-b border-gray-200'>
				<h2 className='text-2xl font-bold text-gray-900'>
					Usuarios Registrados ({users.length})
				</h2>
			</div>

			<div className='overflow-x-auto'>
				<table className='w-full'>
					<thead className='bg-gray-50'>
						<tr>
							<th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Usuario
							</th>
							<th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Email
							</th>
							<th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Teléfono
							</th>
							<th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Rol
							</th>
							<th className='px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Estado
							</th>
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
								<td className='px-6 py-4 whitespace-nowrap'>
									<span
										className='inline-flex px-3 py-1 text-xs font-medium rounded-full text-white'
										style={{
											backgroundColor:
												user.role === 'admin' ? COLORS.primary : COLORS.accent,
										}}
									>
										{user.role === 'admin' ? 'Administrador' : 'Cliente'}
									</span>
								</td>
								<td className='px-6 py-4 whitespace-nowrap'>
									<span
										className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
											user.email_confirmed_at
												? 'bg-green-100 text-green-800'
												: 'bg-yellow-100 text-yellow-800'
										}`}
									>
										{user.email_confirmed_at ? 'Confirmado' : 'Pendiente'}
									</span>
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
									{new Date(user.created_at).toLocaleDateString()}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
									<select
										value={user.role}
										onChange={(e) => onRoleChange(user.id, e.target.value)}
										className='text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2'
									>
										<option value='cliente'>Cliente</option>
										<option value='admin'>Admin</option>
									</select>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
