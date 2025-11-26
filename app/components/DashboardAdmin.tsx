'use client';

import { useState, useEffect, useCallback } from 'react';
import { Users, BriefcaseBusiness } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import { COLORS } from '@/app/constants/colors';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	Typography,
} from '@mui/material';

import {
	UserStatsCards,
	UserFilters,
	UserTable,
	AdminSidebar,
} from './adminDashboard';

import type { UserProfile, UserStats, SidebarItem } from './adminDashboard';

export default function DashboardAdmin() {
	const [users, setUsers] = useState<UserProfile[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<UserProfile[]>([]);
	const [loading, setLoading] = useState(true);
	const [activeSection, setActiveSection] = useState('usuarios');
	const [searchTerm, setSearchTerm] = useState('');
	const [roleFilter, setRoleFilter] = useState('todos');
	const [stats, setStats] = useState<UserStats>({
		total: 0,
		admins: 0,
		clientes: 0,
		trabajadores: 0,
		confirmed: 0,
		pending: 0,
		workersWithPay: 0,
	});
	const [deleteConfirm, setDeleteConfirm] = useState<{
		open: boolean;
		userId: string;
		userName: string;
	} | null>(null);

	const sidebarItems: SidebarItem[] = [
		{
			id: 'usuarios',
			label: 'Gestión de Usuarios',
			icon: <Users className='w-5 h-5' />,
		},
		{
			id: 'trabajadores',
			label: 'Gestión de Trabajadores',
			icon: <BriefcaseBusiness className='w-5 h-5' />,
		},
		// otras sections
	];

	const loadUsers = useCallback(async () => {
		try {
			const res = await fetch('/api/auth/session');
			const { session } = await res.json();

			if (!session) {
				window.location.href = '/login';
				return;
			}

			if (session.user.role !== 'admin') {
				console.error('Usuario no es admin:', session.user.role);
				toast.error('Acceso no autorizado');
				window.location.href = '/dashboard';
				return;
			}

			const { data: profiles, error } = await supabase
				.from('profiles')
				.select(
					'id, nombre, apellido, telefono, email, role, pay, speciality, created_at'
				)
				.order('created_at', { ascending: false });

			if (error) throw error;

			setUsers(profiles || []);
			calculateStats(profiles || []);
		} catch (error) {
			console.error('Error cargando usuarios:', error);
			toast.error('Error al cargar usuarios');
			window.location.href = '/login';
		} finally {
			setLoading(false);
		}
	}, []);

	const calculateStats = (userList: UserProfile[]) => {
		const total = userList.length;
		const admins = userList.filter((u) => u.role === 'admin').length;
		const clientes = userList.filter((u) => u.role === 'cliente').length;
		const trabajadores = userList.filter((u) => u.role === 'trabajador').length;
		const confirmed = userList.filter((u) => u.email_confirmed_at).length;
		const pending = total - confirmed;
		const workersWithPay = userList.filter(
			(u) => u.role === 'trabajador' && u.pay
		).length;

		setStats({
			total,
			admins,
			clientes,
			trabajadores,
			confirmed,
			pending,
			workersWithPay,
		});
	};

	const applyFilters = useCallback(() => {
		let filtered = users;

		if (activeSection === 'trabajadores') {
			filtered = filtered.filter((user) => user.role === 'trabajador');
		}

		if (searchTerm) {
			filtered = filtered.filter(
				(user) =>
					user.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
					user.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
					user.email.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		if (roleFilter !== 'todos') {
			if (activeSection === 'trabajadores') {
				if (roleFilter !== 'trabajador') {
					filtered = filtered.filter((user) => user.speciality === roleFilter);
				}
			} else {
				filtered = filtered.filter((user) => user.role === roleFilter);
			}
		}

		setFilteredUsers(filtered);
	}, [users, searchTerm, roleFilter, activeSection]);

	const handleRoleChange = async (userId: string, newRole: string) => {
		try {
			const { error } = await supabase
				.from('profiles')
				.update({ role: newRole })
				.eq('id', userId);

			if (error) throw error;

			setUsers(
				users.map((user) =>
					user.id === userId ? { ...user, role: newRole } : user
				)
			);

			toast.success(`Rol actualizado a ${newRole}`);
		} catch (error) {
			console.error('Error actualizando rol:', error);
			toast.error('Error al actualizar rol');
		}
	};

	const handlePayToggle = async (userId: string, currentPay: boolean) => {
		try {
			const newPayStatus = !currentPay;
			const { error } = await supabase
				.from('profiles')
				.update({ pay: newPayStatus })
				.eq('id', userId);

			if (error) throw error;

			setUsers(
				users.map((user) =>
					user.id === userId ? { ...user, pay: newPayStatus } : user
				)
			);

			toast.success(
				`Estado de pago ${newPayStatus ? 'activado' : 'desactivado'}`
			);
		} catch (error) {
			console.error('Error actualizando estado de pago:', error);
			toast.error('Error al actualizar estado de pago');
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

	const handleClearFilters = () => {
		setSearchTerm('');
		setRoleFilter('todos');
	};

	const handleDeleteUser = async (userId: string, userName: string) => {
		setDeleteConfirm({ open: true, userId, userName });
	};

	const confirmDeleteUser = async () => {
		if (!deleteConfirm) return;

		try {
			const response = await fetch(`/api/users/${deleteConfirm.userId}`, {
				method: 'DELETE',
			});

			const result = await response.json();

			if (!result.success) {
				throw new Error(result.error);
			}

			setUsers(users.filter((user) => user.id !== deleteConfirm.userId));
			toast.success(
				`Usuario "${deleteConfirm.userName}" eliminado correctamente`
			);
			setDeleteConfirm(null);
		} catch (error) {
			console.error('Error eliminando usuario:', error);
			toast.error('Error al eliminar usuario');
			setDeleteConfirm(null);
		}
	};

	useEffect(() => {
		loadUsers();
	}, [loadUsers]);

	useEffect(() => {
		applyFilters();
	}, [applyFilters]);

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
				<AdminSidebar
					activeSection={activeSection}
					setActiveSection={setActiveSection}
					sidebarItems={sidebarItems}
					onLogout={handleLogout}
				/>

				<div className='flex-1 flex flex-col'>
					<div className='bg-white border-b border-gray-200 px-8 py-6'>
						<h1 className='text-4xl md:text-5xl font-bold text-gray-800'>
							PANEL <span style={{ color: COLORS.primary }}>ADMIN</span>
						</h1>
						<div
							className='w-32 h-1 rounded-full mt-4'
							style={{
								background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primary}80)`,
							}}
						></div>
						<p className='text-lg text-gray-600 mt-4'>
							Administra usuarios y configuraciones del sistema
						</p>
					</div>

					<div className='flex-1 p-8'>
						{activeSection === 'usuarios' && (
							<div className='space-y-8'>
								<UserStatsCards stats={stats} />

								<UserFilters
									searchTerm={searchTerm}
									setSearchTerm={setSearchTerm}
									roleFilter={roleFilter}
									setRoleFilter={setRoleFilter}
									onClearFilters={handleClearFilters}
								/>

								<UserTable
									users={filteredUsers}
									onRoleChange={handleRoleChange}
									onDeleteUser={handleDeleteUser}
								/>
							</div>
						)}

						{activeSection === 'trabajadores' && (
							<div className='space-y-8'>
								<UserStatsCards stats={stats} />

								<UserFilters
									searchTerm={searchTerm}
									setSearchTerm={setSearchTerm}
									roleFilter='trabajador'
									setRoleFilter={setRoleFilter}
									onClearFilters={handleClearFilters}
									isWorkerSection={true}
								/>

								<UserTable
									users={filteredUsers}
									onRoleChange={handleRoleChange}
									onPayToggle={handlePayToggle}
									onDeleteUser={handleDeleteUser}
									isWorkerSection={true}
								/>
							</div>
						)}
					</div>

					<div className='p-8'>
						<div
							className='text-center p-8 rounded-xl text-white max-w-6xl'
							style={{
								background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})`,
							}}
						>
							<h3 className='text-2xl font-bold mb-4'>
								Panel de Administración
							</h3>
							<p className='text-lg opacity-95'>
								Gestiona usuarios, roles y configuraciones del sistema desde un
								solo lugar.
							</p>
						</div>
					</div>
				</div>
			</div>
			{deleteConfirm && (
				<Dialog
					open={deleteConfirm.open}
					onClose={() => setDeleteConfirm(null)}
				>
					<DialogTitle>Confirmar Eliminación</DialogTitle>
					<DialogContent>
						<Typography>
							{`¿Estás seguro de que deseas eliminar al usuario "${deleteConfirm.userName}"? Esta acción no se puede deshacer.`}
						</Typography>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => setDeleteConfirm(null)}>Cancelar</Button>
						<Button
							onClick={confirmDeleteUser}
							color='error'
							variant='contained'
						>
							Eliminar
						</Button>
					</DialogActions>
				</Dialog>
			)}
		</>
	);
}
