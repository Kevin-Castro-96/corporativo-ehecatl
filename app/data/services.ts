import { Service, Client, Project, ContactInfo } from '@/app/types';

export const servicesData: Service[] = [
	{
		id: 1,
		title: 'Domótica Residencial',
		description:
			'Automatización inteligente para hogares modernos. Control total de iluminación, clima, seguridad y entretenimiento desde tu smartphone.',
		category: 'domotica',
		icon: 'home',
		features: [
			'Control de iluminación inteligente',
			'Automatización de clima',
			'Sistemas de seguridad integrados',
			'Control por voz y app móvil',
		],
		imageUrl:
			'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&auto=format&fit=crop&ixlib=rb-4.0.3',
		isPopular: true,
	},
	{
		id: 2,
		title: 'Telefonía IP Empresarial',
		description:
			'Soluciones de comunicación avanzada para empresas. Reduce costos y mejora la productividad con tecnología VoIP de última generación.',
		category: 'telefonia',
		icon: 'phone',
		features: [
			'Centralitas virtuales',
			'Grabación de llamadas',
			'Extensiones móviles',
			'Integración con CRM',
		],
		imageUrl:
			'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&ixlib=rb-4.0.3',
		isPopular: true,
	},
	{
		id: 3,
		title: 'Redes y Infraestructura',
		description:
			'Diseño e implementación de redes corporativas seguras y escalables. WiFi empresarial, cableado estructurado y conectividad optimizada.',
		category: 'redes',
		icon: 'network',
		features: [
			'WiFi empresarial',
			'Cableado estructurado',
			'Switches y routers',
			'Monitoreo 24/7',
		],
		imageUrl:
			'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&ixlib=rb-4.0.3',
	},
	{
		id: 4,
		title: 'Videovigilancia y Seguridad',
		description:
			'Sistemas de videovigilancia de alta definición con análisis inteligente. Protege tu negocio con tecnología de punta.',
		category: 'seguridad',
		icon: 'security',
		features: [
			'Cámaras 4K Ultra HD',
			'Análisis de video inteligente',
			'Almacenamiento en la nube',
			'Alertas en tiempo real',
		],
		imageUrl:
			'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&ixlib=rb-4.0.3',
	},
	{
		id: 5,
		title: 'Automatización Industrial',
		description:
			'Soluciones de automatización para procesos industriales. Optimiza la producción con sistemas inteligentes y eficientes.',
		category: 'automatizacion',
		icon: 'precision_manufacturing',
		features: [
			'Control de procesos',
			'Sensores IoT',
			'Dashboards en tiempo real',
			'Mantenimiento predictivo',
		],
		imageUrl:
			'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&ixlib=rb-4.0.3',
	},
];

export const clientsData: Client[] = [
	{
		id: 1,
		name: 'Desarrollo Digital',
		logoUrl: '/clients/desarrollo-digital.png',
		category: 'corporativo',
		description: 'Servicios de infraestructura tecnológica',
	},
	{
		id: 2,
		name: 'AutoParts Mexico',
		logoUrl: '/clients/autoparts-mexico.png',
		category: 'corporativo',
		description: 'Automatización de procesos industriales',
	},
	{
		id: 3,
		name: 'Asociación Mexicana',
		logoUrl: '/clients/asociacion-mexicana.png',
		category: 'educacion',
		description: 'Sistemas de comunicación y videoconferencia',
	},
	{
		id: 4,
		name: 'Fresshi',
		logoUrl: '/clients/fresshi.png',
		category: 'corporativo',
		description: 'Soluciones de refrigeración inteligente',
	},
];

export const projectsData: Project[] = [
	{
		id: 1,
		title: 'Casa Inteligente Premium',
		client: 'Cliente Residencial',
		category: 'Domótica',
		description:
			'Implementación completa de domótica en residencia de lujo con control de iluminación, clima, seguridad y entretenimiento.',
		imageUrl:
			'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&ixlib=rb-4.0.3',
		technologies: ['KNX', 'Alexa', 'Philips Hue', 'Nest'],
		completedDate: '2023-11',
	},
	{
		id: 2,
		title: 'Centralita IP Corporativa',
		client: 'Empresa Manufacturera',
		category: 'Telefonía IP',
		description:
			'Migración completa a telefonía IP con 200+ extensiones, grabación de llamadas y integración CRM.',
		imageUrl:
			'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&ixlib=rb-4.0.3',
		technologies: ['Asterisk', 'FreePBX', 'Yealink', 'SIP'],
		completedDate: '2023-09',
	},
];

export const contactInfo: ContactInfo = {
	address: 'Pachuca, Hidalgo, México',
	phone: '771 771 604 0985',
	email: 'contacto@corporativoehecatl.com.mx',
	website: 'corporativoehecatl.com.mx',
	socialMedia: {
		facebook: 'https://facebook.com/corporativoehecatl',
		linkedin: 'https://linkedin.com/company/corporativo-ehecatl',
	},
};

export const getServicesByCategory = (category?: string): Service[] => {
	if (!category) return servicesData;
	return servicesData.filter((service) => service.category === category);
};

export const getPopularServices = (): Service[] => {
	return servicesData.filter((service) => service.isPopular);
};
