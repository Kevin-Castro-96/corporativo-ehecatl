export interface Service {
	id: number;
	title: string;
	description: string;
	category: 'domotica' | 'telefonia' | 'redes' | 'seguridad' | 'automatizacion';
	icon: string;
	features: string[];
	imageUrl?: string;
	isPopular?: boolean;
}

export interface Product {
	id: number;
	name: string;
	description: string;
	category: string;
	brand?: string;
	imageUrl?: string;
	specifications?: string[];
	price?: number;
	inStock?: boolean;
}

export interface Client {
	id: number;
	name: string;
	logoUrl: string;
	category: 'corporativo' | 'gobierno' | 'educacion' | 'residencial';
	description?: string;
}

export interface Project {
	id: number;
	title: string;
	client: string;
	category: string;
	description: string;
	imageUrl: string;
	technologies: string[];
	completedDate: string;
}

export interface ServiceCardProps {
	service: Service;
	onLearnMore?: (service: Service) => void;
}

export interface ClientLogoProps {
	client: Client;
	size?: 'small' | 'medium' | 'large';
}

export interface HeroProps {
	onContactClick: () => void;
	onServicesClick: () => void;
}

export interface ContactForm {
	name: string;
	email: string;
	phone?: string;
	company?: string;
	service: string;
	message: string;
}

export interface ContactInfo {
	address: string;
	phone: string;
	email: string;
	website: string;
	socialMedia: {
		facebook?: string;
		linkedin?: string;
		twitter?: string;
		instagram?: string;
	};
}
