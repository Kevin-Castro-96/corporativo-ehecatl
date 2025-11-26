'use client';

import { useState, useEffect } from 'react';
import { Person as User, Work, Assignment } from '@mui/icons-material';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import { COLORS } from '@/app/constants/colors';

import { WorkerSidebar, PersonalInfo } from './workerDashboard';

import type {
	WorkerProfile,
	WorkerSidebarItem,
	WorkerEditFormData,
} from './workerDashboard';

export default function DashboardTrabajador() {
	const [user, setUser] = useState<WorkerProfile | null>(null);
	const [editing, setEditing] = useState(false);
	const [loading, setLoading] = useState(true);
	const [activeSection, setActiveSection] = useState('personal');
	const [editForm, setEditForm] = useState<WorkerEditFormData>({
		nombre: '',
		apellido: '',
		telefono: '',
	});

	const sidebarItems: WorkerSidebarItem[] = [
		{
			id: 'personal',
			label: 'Información Personal',
			icon: <User className='w-5 h-5' />,
		},
		{
			id: 'jobs',
			label: 'Trabajos Disponibles',
			icon: <Work className='w-5 h-5' />,
		},
		{
			id: 'assignments',
			label: 'Mis Asignaciones',
			icon: <Assignment className='w-5 h-5' />,
		},
	];

	const loadUserProfile = async () => {
		try {
			const res = await fetch('/api/auth/session');
			const { session } = await res.json();

			if (!session) {
				window.location.href = '/login';
				return;
			}

			const { data: profile, error } = await supabase
				.from('profiles')
				.select('*')
				.eq('id', session.user.id)
				.single();

			if (error) throw error;

			if (profile.role !== 'trabajador') {
				toast.error('Acceso no autorizado');
				window.location.href = '/dashboard';
				return;
			}

			setUser(profile);
			setEditForm({
				nombre: profile.nombre,
				apellido: profile.apellido,
				telefono: profile.telefono,
			});
		} catch (error) {
			console.error('Error cargando perfil:', error);
			toast.error('Error al cargar perfil');
			window.location.href = '/login';
		} finally {
			setLoading(false);
		}
	};

	const handleLogout = async () => {
		try {
			await fetch('/api/auth/logout', { method: 'POST' });
			window.location.href = '/login';
			toast.success('Sesión cerrada correctamente');
		} catch (error) {
			console.error('Error cerrando sesión:', error);
			toast.error('Error al cerrar sesión');
		}
	};

	const handleEdit = () => {
		setEditing(true);
		setEditForm({
			nombre: user?.nombre || '',
			apellido: user?.apellido || '',
			telefono: user?.telefono || '',
		});
	};

	const handleSave = async () => {
		try {
			if (!user) return;

			const { error } = await supabase
				.from('profiles')
				.update({
					nombre: editForm.nombre,
					apellido: editForm.apellido,
					telefono: editForm.telefono,
				})
				.eq('id', user.id);

			if (error) throw error;

			setUser({
				...user,
				nombre: editForm.nombre,
				apellido: editForm.apellido,
				telefono: editForm.telefono,
			});

			setEditing(false);
			toast.success('Perfil actualizado correctamente');
		} catch (error) {
			console.error('Error actualizando perfil:', error);
			toast.error('Error al actualizar perfil');
		}
	};

	const handleCancel = () => {
		setEditing(false);
		setEditForm({
			nombre: user?.nombre || '',
			apellido: user?.apellido || '',
			telefono: user?.telefono || '',
		});
	};

	useEffect(() => {
		loadUserProfile();
	}, []);

	if (loading) {
		return (
			<>
				<div className='min-h-screen bg-gray-50 flex items-center justify-center'>
					<div
						className='animate-spin rounded-full h-12 w-12 border-b-2'
						style={{ borderColor: COLORS.primary }}
					></div>
				</div>
			</>
		);
	}

	return (
		<>
			<div className='min-h-screen bg-gray-50 flex'>
				<WorkerSidebar
					user={user}
					activeSection={activeSection}
					setActiveSection={setActiveSection}
					sidebarItems={sidebarItems}
					onLogout={handleLogout}
				/>

				<div className='flex-1 flex flex-col'>
					<div className='bg-white border-b border-gray-200 px-8 py-6'>
						<h1 className='text-4xl md:text-5xl font-bold text-gray-800'>
							MI{' '}
							<span style={{ color: COLORS.primary }}>PERFIL PROFESIONAL</span>
						</h1>
						<div
							className='w-32 h-1 rounded-full mt-4'
							style={{
								background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primary}80)`,
							}}
						></div>
						<p className='text-lg text-gray-600 mt-4'>
							Gestiona tu información profesional y encuentra nuevas
							oportunidades
						</p>
					</div>

					<div className='flex-1 p-8'>
						{activeSection === 'personal' && (
							<PersonalInfo
								user={user}
								editing={editing}
								editForm={editForm}
								setEditForm={setEditForm}
								onEdit={handleEdit}
								onSave={handleSave}
								onCancel={handleCancel}
							/>
						)}
						{activeSection === 'jobs' && (
							<div className='bg-white rounded-2xl shadow-lg p-8'>
								<h2 className='text-2xl font-bold text-gray-800 mb-4'>
									Trabajos Disponibles
								</h2>
								<p className='text-gray-600'>
									Aquí aparecerán los trabajos disponibles para tu especialidad.
								</p>
							</div>
						)}
						{activeSection === 'assignments' && (
							<div className='bg-white rounded-2xl shadow-lg p-8'>
								<h2 className='text-2xl font-bold text-gray-800 mb-4'>
									Mis Asignaciones
								</h2>
								<p className='text-gray-600'>
									Aquí aparecerán tus trabajos asignados.
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
