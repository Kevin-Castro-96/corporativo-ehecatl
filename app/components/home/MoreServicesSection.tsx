'use client';
import React from 'react';
import Image from 'next/image';
import { COLORS } from '@/app/constants/colors';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MessageIcon from '@mui/icons-material/Message';
import AnalyticsIcon from '@mui/icons-material/Analytics';

export default function MoreServicesSection() {
	const services = [
		{
			id: 1,
			title: 'Mensajería Masiva WhatsApp',
			imageUrl: '/services/service1.jpg',
			linkUrl:
				'https://www.facebook.com/photo.php?fbid=770736315096064&set=a.736979101805119&type=3&ref=embed_post',
		},
		{
			id: 2,
			title: 'Email Marketing Masivo',
			imageUrl: '/services/service2.jpg',
			linkUrl:
				'https://www.facebook.com/photo.php?fbid=766217722214590&set=a.736979101805119&type=3&ref=embed_post',
		},
		{
			id: 3,
			title: 'Presencia Digital Corporativa',
			imageUrl: '/services/service3.jpg',
			linkUrl:
				'https://www.facebook.com/photo.php?fbid=764975059005523&set=a.736979101805119&type=3&ref=embed_post',
		},
	];

	const handleServiceClick = (linkUrl: string) => {
		window.open(linkUrl, '_blank', 'noopener,noreferrer');
	};

	return (
		<>
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
							CAMPAÑAS PARA{' '}
							<span style={{ color: COLORS.primary }}>REDES SOCIALES</span>
						</h2>

						<div className='flex justify-center mb-8'>
							<div
								className='w-32 h-1 rounded-full'
								style={{
									background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primary}80)`,
								}}
							></div>
						</div>

						<p className='text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
							Manejo profesional de redes sociales para campañas online,
							diseñado para todo tipo de negocio e imagen pública. Potencia tu
							presencia digital con estrategias que generan resultados reales.
						</p>
					</div>

					<div className='max-w-5xl mx-auto mb-16'>
						<h3 className='text-3xl font-bold text-center mb-12 text-gray-800'>
							¿Qué incluyen nuestras campañas?
						</h3>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							<div className='text-center p-6 bg-white rounded-xl shadow-inner drop-shadow-xl hover:shadow-xl transition-shadow'>
								<div className='flex justify-center mb-4'>
									<BurstModeIcon  sx={{ fontSize: 48, color: COLORS.primary }} />
								</div>
								<h4 className='text-lg font-semibold mb-2 text-gray-800'>
									Contenido Atractivo
								</h4>
								<p className='text-gray-600 text-sm'>
									Creación de contenido visual y textual que conecta con tu
									audiencia
								</p>
							</div>

							<div className='text-center p-6 bg-white rounded-xl shadow-inner drop-shadow-xl hover:shadow-xl transition-shadow'>
								<div className='flex justify-center mb-4'>
									<EditDocumentIcon  sx={{ fontSize: 48, color: COLORS.primary }} />
								</div>
								<h4 className='text-lg font-semibold mb-2 text-gray-800'>
									Marketing Copy
								</h4>
								<p className='text-gray-600 text-sm'>
									Redacción profesional de mensajes que convierten
								</p>
							</div>

							<div className='text-center p-6 bg-white rounded-xl shadow-inner drop-shadow-xl hover:shadow-xl transition-shadow'>
								<div className='flex justify-center mb-4'>
									<ScheduleIcon sx={{ fontSize: 48, color: COLORS.primary }} />
								</div>
								<h4 className='text-lg font-semibold mb-2 text-gray-800'>
									Programación
								</h4>
								<p className='text-gray-600 text-sm'>
									Actualización semanal programada y consistente
								</p>
							</div>

							<div className='text-center p-6 bg-white rounded-xl shadow-inner drop-shadow-xl hover:shadow-xl transition-shadow'>
								<div className='flex justify-center mb-4'>
									<MessageIcon sx={{ fontSize: 48, color: COLORS.primary }} />
								</div>
								<h4 className='text-lg font-semibold mb-2 text-gray-800'>
									Mensajería Masiva
								</h4>
								<p className='text-gray-600 text-sm'>
									WhatsApp y SMS masivos para alcance directo
								</p>
							</div>

							<div className='text-center p-6 bg-white rounded-xl shadow-inner drop-shadow-xl hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1'>
								<div className='flex justify-center mb-4'>
									<AnalyticsIcon sx={{ fontSize: 48, color: COLORS.primary }} />
								</div>
								<h4 className='text-lg font-semibold mb-2 text-gray-800'>
									Análisis
								</h4>
								<p className='text-gray-600 text-sm'>
									Métricas detalladas y análisis de engagement
								</p>
							</div>
						</div>
					</div>

					<div className='text-center mb-12'>
						<h3 className='text-3xl font-bold text-gray-800 mb-4'>
							Ejemplos de nuestro trabajo
						</h3>
						<p className='text-gray-600 max-w-2xl mx-auto'>
							Conoce algunos de nuestros proyectos en marketing digital y
							comunicación masiva
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
						{services.map((service) => (
							<div
								key={service.id}
								className='group cursor-pointer hover:-translate-y-2 transition-transform duration-300'
								onClick={() => handleServiceClick(service.linkUrl)}
							>
								<div className='relative h-96 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
									<Image
										src={service.imageUrl}
										alt={service.title}
										fill
										className='object-cover group-hover:scale-105 transition-transform duration-500'
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw'
									/>
									<div className='absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6'>
										<h4 className='text-white text-lg font-semibold'>
											{service.title}
										</h4>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
