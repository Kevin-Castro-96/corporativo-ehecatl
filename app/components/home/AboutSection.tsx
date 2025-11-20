'use client';
import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
	return (
		<>
			<section className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
								NUESTROS <span className='text-red-600'>SERVICIOS</span>
							</h2>

							<div className='w-24 h-1 bg-linear-to-r from-red-600 to-red-400 rounded-full mb-8'></div>

							<p className='text-lg text-gray-600 mb-6 leading-relaxed'>
								El desarrollo de la productividad mediante la eficiencia y
								eficacia es clave para la competitividad institucional, a menudo
								requiere reorganización.
							</p>

							<p className='text-gray-600 mb-6 leading-relaxed'>
								En la búsqueda de la excelencia, invitamos a explorar la oferta
								académica del Instituto para la Transformación Digital, donde se
								cultivan habilidades esenciales para el éxito profesional.
								Obtenga más información en{' '}
								<a
									href='https://www.desarrollemosmx.edu.mx/'
									target='_blank'
									rel='noopener noreferrer'
									className='text-red-600 hover:text-red-700 underline font-medium'
								>
									https://www.desarrollemosmx.edu.mx/
								</a>
							</p>

							<p className='text-gray-600 leading-relaxed'>
								Este enfoque se refleja en un eficiente servicio al ciudadano,
								agilizando procesos administrativos y gestionando recursos de
								manera efectiva. La integración de servicios y la mejora de la
								comunicación con los ciudadanos son esenciales para atraer
								actividades productivas.
							</p>
						</div>

						<div className='relative'>
							<div className='relative h-96 rounded-2xl overflow-hidden shadow-xl'>
								<Image
									src='/info.jpg'
									alt='Nuestros Servicios - Corporativo Ehécatl'
									fill
									className='object-cover'
									sizes='(max-width: 1024px) 100vw, 50vw'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
