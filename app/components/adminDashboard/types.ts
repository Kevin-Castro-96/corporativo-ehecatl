export interface UserProfile {
	id: string;
	nombre: string;
	apellido: string;
	telefono: string;
	email: string;
	role: string;
	created_at: string;
	email_confirmed_at?: string;
	pay?: boolean;
	speciality?: string;
}

export interface UserStats {
	total: number;
	admins: number;
	clientes: number;
	trabajadores: number;
	confirmed: number;
	pending: number;
	workersWithPay: number;
}

export interface SidebarItem {
	id: string;
	label: string;
	icon: React.ReactNode;
}
