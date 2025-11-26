import { Product } from '@/app/types/productsTypes';

export const productsData: Product[] = [
	{
		id: 1,
		name: 'CHATBOT',
		price: 1200.0,
		imageUrl:
			'https://images.unsplash.com/photo-1659018966834-99be9746b49e?q=80&w=1198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'chatbot',
		shopUrl: 'https://corporativoehecatl.mitiendanube.com/productos/chatbot1/', // 🟢 AGREGAR
	},
	{
		id: 2,
		name: 'LUCES INTELIGENTES',
		price: 200.0,
		imageUrl: '/products/1.png',
		category: 'luces',
		shopUrl:
			'https://corporativoehecatl.mitiendanube.com/productos/luces-inteligentes/', // 🟢 AGREGAR
	},
	{
		id: 3,
		name: 'LÍNEA TELEFÓNICA PARA 10 LLAMADAS SIMULTÁNEAS',
		price: 260.0,
		imageUrl:
			'https://images.unsplash.com/photo-1598978642354-11ba53ba56fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'telefonia',
		shopUrl:
			'https://corporativoehecatl.mitiendanube.com/productos/linea-telefonica-para-10-llamadas-simultaneas/', // 🟢 AGREGAR (deducido)
	},
	{
		id: 4,
		name: 'LÍNEA TELEFÓNICA PARA 2 LLAMADAS SIMULTÁNEAS',
		price: 130.0,
		imageUrl:
			'https://images.unsplash.com/photo-1587560699334-bea93391dcef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'telefonia',
		shopUrl:
			'https://corporativoehecatl.mitiendanube.com/productos/linea-telefonica-para-2-llamadas-simultaneas/', // 🟢 AGREGAR
	},
	{
		id: 5,
		name: 'CONMUTADOR 20 LLAMADAS',
		price: 1105.0,
		imageUrl: '/products/conmutador2.jpg',
		category: 'telefonia',
		shopUrl:
			'https://corporativoehecatl.mitiendanube.com/productos/conmutador-20-llamadas/', // 🟢 AGREGAR
	},
	{
		id: 6,
		name: 'CONMUTADOR 10 LLAMADAS',
		price: 780.0,
		imageUrl: '/products/conmutador1.jpg',
		category: 'telefonia',
		shopUrl:
			'https://corporativoehecatl.mitiendanube.com/productos/conmutador-10-llamadas/', // 🟢 AGREGAR
	},
	{
		id: 7,
		name: 'CONMUTADOR 5 LLAMADAS',
		price: 520.0,
		imageUrl: '/products/conmutador1.jpg',
		category: 'telefonia',
		shopUrl:
			'https://corporativoehecatl.mitiendanube.com/productos/conmutador-5-llamadas/', // 🟢 AGREGAR
	},
	{
		id: 8,
		name: 'CORREOS INSTITUCIONALES',
		price: 200.0,
		imageUrl:
			'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'comunicaciones',
		shopUrl:
			'https://corporativoehecatl.mitiendanube.com/productos/correos-institucionales1/', // 🟢 AGREGAR
	},
	{
		id: 9,
		name: 'TELEFONÍA IP',
		price: 2861.33,
		imageUrl:
			'https://images.unsplash.com/photo-1612447733386-a93717f1fb2a?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		category: 'telefonia',
		shopUrl: 'https://corporativo-ehecatl-neon.vercel.app/contact',
	},
];

export const getProductsByCategory = (category?: string): Product[] => {
	if (!category) return productsData;
	return productsData.filter((product) => product.category === category);
};

export const getCategories = (): string[] => {
	const categories = productsData.map((product) => product.category);
	return Array.from(new Set(categories));
};
