export interface WorkerProfile {
	id: string;
	nombre: string;
	apellido: string;
	telefono: string;
	email: string;
	role: string;
	pay: boolean;
	speciality: 'plomeria' | 'jardineria' | 'electricista' | 'inmobiliaria';
	created_at?: string;
}

export interface WorkerSidebarItem {
	id: string;
	label: string;
	icon: React.ReactNode;
}

export interface WorkerEditFormData {
	nombre: string;
	apellido: string;
	telefono: string;
}

export type WorkerSpeciality = 'plomeria' | 'jardineria' | 'electricista' | 'inmobiliaria';

export interface WorkerStats {
	totalJobs?: number;
	completedJobs?: number;
	pendingJobs?: number;
	earnings?: number;
}