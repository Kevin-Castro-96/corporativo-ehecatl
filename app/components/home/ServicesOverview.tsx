'use client';
import React from 'react';
import ServiceCard from '@/app/components/ui/ServiceCard';
import { getPopularServices } from '@/app/data/services';
import { Service } from '@/app/types';

interface ServicesOverviewProps {
	onServiceClick?: (service: Service) => void;
}

export default function ServicesOverview({
	onServiceClick,
}: ServicesOverviewProps) {
	const popularServices = getPopularServices();

	const handleServiceClick = (service: Service) => {
		if (onServiceClick) {
			onServiceClick(service);
		} else {
			console.log(`Ver detalles del servicio: ${service.title}`);
		}
	};

	return (
		<section id='services' className='py-20 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
						Nuestros <span className='text-red-600'>Servicios</span>
					</h2>
					<div className='w-24 h-1 bg-linear-to-r from-red-600 to-red-400 mx-auto rounded-full mb-6'></div>
					<p className='text-lg md:text-xl text-gray-600 max-w-4xl mx-auto'>
						Ofrecemos soluciones tecnológicas integrales para empresas y
						hogares. Nuestra misión es llevar tu hogar o negocio al siguiente
						nivel con tecnología de vanguardia y soporte personalizado.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12'>
					{popularServices.map((service) => (
						<ServiceCard
							key={service.id}
							service={service}
							onLearnMore={handleServiceClick}
						/>
					))}
				</div>

				<div className='text-center'>
					<button
						className='bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
						onClick={() => {
							//navegará página completa de servicios
							console.log('Ver todos los servicios');
						}}
					>
						Ver Todos los Servicios
					</button>
				</div>
			</div>
		</section>
	);
}
