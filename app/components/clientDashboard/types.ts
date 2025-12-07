export interface UserProfile {
	id: string;
	nombre: string;
	apellido: string;
	telefono: string;
	email: string;
	speciality: string;
	created_at: string;
}

export interface SidebarItem {
	id: string;
	label: string;
	icon: React.ReactNode;
}

export interface EditFormData {
	nombre: string;
	apellido: string;
	telefono: string;
}
