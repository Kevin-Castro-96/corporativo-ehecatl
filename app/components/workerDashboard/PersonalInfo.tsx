import {
	Email as Mail,
	Edit,
	Save,
	Close as X,
	Work,
	Payment,
} from '@mui/icons-material';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { COLORS } from '@/app/constants/colors';
import { WorkerProfile, WorkerEditFormData } from './types';

interface WorkerPersonalInfoProps {
	user: WorkerProfile | null;
	editing: boolean;
	editForm: WorkerEditFormData;
	setEditForm: (form: WorkerEditFormData) => void;
	onEdit: () => void;
	onSave: () => void;
	onCancel: () => void;
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

export default function WorkerPersonalInfo({
	user,
	editing,
	editForm,
	setEditForm,
	onEdit,
	onSave,
	onCancel,
}: WorkerPersonalInfoProps) {
	return (
		<div className='bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl'>
			<div className='flex items-center gap-3 mb-8'>
				<Mail className='w-8 h-8' style={{ color: COLORS.primary }} />
				<h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
					Información Personal
				</h2>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div className='space-y-2'>
					<label className='block text-sm font-medium text-gray-700'>
						Nombre *
					</label>
					{editing ? (
						<Input
							value={editForm.nombre}
							onChange={(e) =>
								setEditForm({ ...editForm, nombre: e.target.value })
							}
							placeholder='Tu nombre'
							className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all'
						/>
					) : (
						<div className='px-4 py-3 bg-gray-50 rounded-lg'>
							<p className='text-lg text-gray-900'>{user?.nombre}</p>
						</div>
					)}
				</div>

				<div className='space-y-2'>
					<label className='block text-sm font-medium text-gray-700'>
						Apellido *
					</label>
					{editing ? (
						<Input
							value={editForm.apellido}
							onChange={(e) =>
								setEditForm({ ...editForm, apellido: e.target.value })
							}
							placeholder='Tu apellido'
							className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all'
						/>
					) : (
						<div className='px-4 py-3 bg-gray-50 rounded-lg'>
							<p className='text-lg text-gray-900'>{user?.apellido}</p>
						</div>
					)}
				</div>

				<div className='space-y-2'>
					<label className='block text-sm font-medium text-gray-700'>
						Email
					</label>
					<div className='px-4 py-3 bg-gray-50 rounded-lg border border-gray-200'>
						<p className='text-lg text-gray-900'>{user?.email}</p>
						<span className='text-xs text-gray-500'>
							El email no se puede modificar
						</span>
					</div>
				</div>

				<div className='space-y-2'>
					<label className='block text-sm font-medium text-gray-700'>
						Teléfono *
					</label>
					{editing ? (
						<Input
							value={editForm.telefono}
							onChange={(e) =>
								setEditForm({ ...editForm, telefono: e.target.value })
							}
							placeholder='Tu teléfono'
							className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all'
						/>
					) : (
						<div className='px-4 py-3 bg-gray-50 rounded-lg'>
							<p className='text-lg text-gray-900'>{user?.telefono}</p>
						</div>
					)}
				</div>

				<div className='space-y-2'>
					<label className='block text-sm font-medium text-gray-700'>
						Especialidad
					</label>
					<div className='px-4 py-3 bg-gray-50 rounded-lg border border-gray-200'>
						<div className='flex items-center gap-2'>
							<Work className='w-5 h-5 text-gray-500' />
							<p className='text-lg text-gray-900'>
								{user?.speciality && getSpecialityLabel(user.speciality)}
							</p>
						</div>
						<span className='text-xs text-gray-500'>
							La especialidad no se puede modificar
						</span>
					</div>
				</div>

				<div className='space-y-2'>
					<label className='block text-sm font-medium text-gray-700'>
						Estado de Pago
					</label>
					<div className='px-4 py-3 bg-gray-50 rounded-lg border border-gray-200'>
						<div className='flex items-center gap-2'>
							<Payment className='w-5 h-5 text-gray-500' />
							<span
								className={`px-3 py-1 rounded-full text-sm font-medium ${
									user?.pay
										? 'bg-green-100 text-green-700'
										: 'bg-red-100 text-red-700'
								}`}
							>
								{user?.pay ? 'Al día' : 'Pendiente'}
							</span>
						</div>
						<span className='text-xs text-gray-500'>
							Solo el administrador puede modificar este estado
						</span>
					</div>
				</div>
			</div>

			<div className='flex justify-end gap-4 mt-12 pt-8 border-t border-gray-200'>
				{editing ? (
					<>
						<Button
							variant='outline'
							onClick={onCancel}
							className='px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300'
						>
							<X className='w-4 h-4 mr-2' />
							Cancelar
						</Button>
						<Button
							onClick={onSave}
							className='px-6 py-3 text-white font-semibold hover:shadow-lg transition-all duration-300'
							style={{ backgroundColor: COLORS.primary }}
						>
							<Save className='w-4 h-4 mr-2' />
							Guardar Cambios
						</Button>
					</>
				) : (
					<Button
						onClick={onEdit}
						className='px-6 py-3 text-white font-semibold hover:shadow-lg transition-all duration-300'
						style={{ backgroundColor: COLORS.primary }}
					>
						<Edit className='w-4 h-4 mr-2' />
						Editar Perfil
					</Button>
				)}
			</div>
		</div>
	);
}
