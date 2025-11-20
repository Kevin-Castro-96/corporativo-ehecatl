'use client';
import React from 'react';
import Image from 'next/image';

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
		<section className='py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
						MÁS <span className='text-red-600'>SERVICIOS</span>
					</h2>
					<div className='w-24 h-1 bg-linear-to-r from-red-600 to-red-400 mx-auto rounded-full mb-6'></div>
					<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
						Descubre nuestras soluciones especializadas en marketing digital,
						comunicación masiva y presencia corporativa en línea.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
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
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
