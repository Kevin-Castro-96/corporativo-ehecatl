'use client';
import React from 'react';
import Image from 'next/image';
interface ResidentialService {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	linkUrl: string;
	isExternal?: boolean;
}

export default function ResidentialServicesGrid() {
	const services: ResidentialService[] = [
		{
			id: 1,
			title: 'PLOMERO',
			description:
				'Servicios profesionales de plomería para tu hogar. Reparaciones, instalaciones y mantenimiento.',
			imageUrl:
				'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			linkUrl: '/plomeria',
		},
		{
			id: 2,
			title: 'JARDINEROS',
			description:
				'Cuidado y mantenimiento de jardines. Diseño paisajístico y servicios de jardinería profesional.',
			imageUrl:
				'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop&ixlib=rb-4.0.3',
			linkUrl: '/jardineria',
		},
		{
			id: 3,
			title: 'ELECTRICISTAS',
			description:
				'Instalaciones eléctricas seguras y confiables. Reparaciones y mantenimiento eléctrico residencial.',
			imageUrl:
				'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&auto=format&fit=crop&ixlib=rb-4.0.3',
			linkUrl: '/electricista',
		},
		{
			id: 4,
			title: 'INMOBILIARIA',
			description:
				'Encuentra tu hogar ideal con nuestra plataforma inmobiliaria. Compra, venta y renta de propiedades.',
			imageUrl:
				'https://images.unsplash.com/photo-1741156386380-0236c72eb6f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			linkUrl: 'https://inmobiliaria-iram.vercel.app/',
			isExternal: true,
		},
	];

	const handleServiceClick = (service: ResidentialService) => {
		if (service.isExternal) {
			window.open(service.linkUrl, '_blank', 'noopener,noreferrer');
		} else {
			window.open(service.linkUrl, '_blank', 'noopener,noreferrer');
		}
	};

	return (
		<section className='py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
						BUSCAMOS EXPERTOS PARA PROYECTOS EN TODO{' '}
						<span className='text-red-600'>PACHUCA</span>
					</h2>
					<div className='w-24 h-1 bg-linear-to-r from-red-600 to-red-400 mx-auto rounded-full mb-8'></div>
					<p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
						Lleva tu pasión a nuevos horizontes.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{services.map((service) => (
						<article
							key={service.id}
							className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2 cursor-pointer'
							onClick={() => handleServiceClick(service)}
						>
							<div className='relative h-64 overflow-hidden'>
								<Image
									src={service.imageUrl}
									alt={service.title}
									fill
									className='object-cover group-hover:scale-110 transition-transform duration-500'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw'
								/>

								<div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent'>
									<div className='absolute bottom-0 left-0 right-0 p-6'>
										<h3 className='text-2xl font-bold text-white mb-2'>
											{service.title}
										</h3>
									</div>
								</div>
							</div>

							<div className='p-6'>
								<p className='text-gray-600 text-sm leading-relaxed mb-4'>
									{service.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
