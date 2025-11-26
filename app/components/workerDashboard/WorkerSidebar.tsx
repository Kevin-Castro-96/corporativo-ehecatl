import { Logout } from '@mui/icons-material';
import { Work as WorkIcon } from '@mui/icons-material';
import { COLORS } from '@/app/constants/colors';
import { WorkerSidebarItem, WorkerProfile } from './types';

interface WorkerSidebarProps {
	user: WorkerProfile | null;
	activeSection: string;
	setActiveSection: (section: string) => void;
	sidebarItems: WorkerSidebarItem[];
	onLogout: () => void;
}

const getSpecialityLabel = (speciality: string) => {
	const labels = {
		plomeria: 'Plomero',
		jardineria: 'Jardinero',
		electricista: 'Electricista',
		inmobiliaria: 'Agente Inmobiliario',
	};
	return labels[speciality as keyof typeof labels] || speciality;
};

export default function WorkerSidebar({
	user,
	activeSection,
	setActiveSection,
	sidebarItems,
	onLogout,
}: WorkerSidebarProps) {
	const handleLogout = () => {
		const confirmed = confirm('¿Estás seguro de que deseas cerrar sesión?');
		if (confirmed) {
			onLogout();
		}
	};
	return (
		<div className='w-80 bg-white shadow-xl border-r border-gray-200'>
			<div className='p-6 border-b border-gray-200'>
				<div className='flex items-center gap-3 p-2'>
					<div
						className='w-12 h-12 rounded-full flex items-center justify-center'
						style={{ backgroundColor: `${COLORS.primary}20` }}
					>
						<WorkIcon className='w-6 h-6' style={{ color: COLORS.primary }} />
					</div>
					<div className='flex-1'>
						<h3 className='font-semibold text-gray-900'>
							{user?.nombre} {user?.apellido}
						</h3>
						<span
							className='text-xs px-2 py-1 rounded-full'
							style={{
								backgroundColor: `${COLORS.primary}20`,
								color: COLORS.primary,
							}}
						>
							{user?.speciality && getSpecialityLabel(user.speciality)}
						</span>
					</div>
				</div>
			</div>

			<nav className='p-6'>
				<div className='space-y-2'>
					{sidebarItems.map((item) => (
						<button
							key={item.id}
							onClick={() => setActiveSection(item.id)}
							className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
								activeSection === item.id
									? 'text-white shadow-lg'
									: 'text-gray-600 hover:bg-gray-50'
							}`}
							style={{
								backgroundColor:
									activeSection === item.id ? COLORS.primary : undefined,
							}}
						>
							{item.icon}
							{item.label}
						</button>
					))}

					<div className='pt-4 mt-4 border-t border-gray-200'>
						<button
							onClick={handleLogout}
							className='w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 text-red-600 hover:bg-red-50'
						>
							<Logout className='w-5 h-5' />
							Cerrar Sesión
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
}
