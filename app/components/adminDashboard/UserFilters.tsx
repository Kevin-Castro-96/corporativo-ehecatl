import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { COLORS } from '@/app/constants/colors';

interface UserFiltersProps {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	roleFilter: string;
	setRoleFilter: (filter: string) => void;
	onClearFilters: () => void;
}

export default function UserFilters({
	searchTerm,
	setSearchTerm,
	roleFilter,
	setRoleFilter,
	onClearFilters,
}: UserFiltersProps) {
	return (
		<div className='bg-white rounded-2xl shadow-lg p-8'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				<div>
					<label className='block text-sm font-medium text-gray-700 mb-2'>
						Buscar usuario
					</label>
					<div className='relative'>
						<Search className='absolute left-3 top-3 w-4 h-4 text-gray-400' />
						<Input
							placeholder='Nombre, apellido o email...'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className='pl-10'
						/>
					</div>
				</div>

				<div>
					<label className='block text-sm font-medium text-gray-700 mb-2'>
						Filtrar por rol
					</label>
					<select
						value={roleFilter}
						onChange={(e) => setRoleFilter(e.target.value)}
						className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
					>
						<option value='todos'>Todos los roles</option>
						<option value='admin'>Administradores</option>
						<option value='cliente'>Clientes</option>
					</select>
				</div>

				<div className='flex items-end'>
					<Button
						onClick={onClearFilters}
						className='w-full text-white font-semibold'
						style={{ backgroundColor: COLORS.primary }}
					>
						Limpiar Filtros
					</Button>
				</div>
			</div>
		</div>
	);
}
