import Image from 'next/image';

const GardenIcon = () => (
	<svg className='w-12 h-12 text-white' fill='currentColor' viewBox='0 0 20 20'>
		<path
			fillRule='evenodd'
			d='M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 01-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 01-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z'
			clipRule='evenodd'
		/>
	</svg>
);

const TreeIcon = () => (
	<svg className='w-12 h-12 text-white' fill='currentColor' viewBox='0 0 20 20'>
		<path
			fillRule='evenodd'
			d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z'
			clipRule='evenodd'
		/>
	</svg>
);

const FlowerIcon = () => (
	<svg className='w-12 h-12 text-white' fill='currentColor' viewBox='0 0 20 20'>
		<path
			fillRule='evenodd'
			d='M4 2a2 2 0 00-2 2v11a2 2 0 104 0V4a2 2 0 00-2-2zM8 2a2 2 0 00-2 2v11a2 2 0 104 0V4a2 2 0 00-2-2zM14 2a2 2 0 00-2 2v11a2 2 0 104 0V4a2 2 0 00-2-2z'
			clipRule='evenodd'
		/>
	</svg>
);

const PhoneIcon = () => (
	<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
		<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
	</svg>
);

const LocationIcon = () => (
	<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
		<path
			fillRule='evenodd'
			d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
			clipRule='evenodd'
		/>
	</svg>
);

const services = [
	{
		title: 'Diseño de Jardines',
		description:
			'Conectamos con paisajistas especializados en diseño personalizado de jardines y espacios verdes únicos.',
		image:
			'https://images.unsplash.com/photo-1623358519330-00f61d89396b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		icon: GardenIcon,
		features: [
			'Diseño personalizado',
			'Paisajismo profesional',
			'Selección de plantas',
			'Planos detallados',
		],
	},
	{
		title: 'Mantenimiento de Jardines',
		description:
			'Red de jardineros expertos en mantenimiento regular para mantener tu jardín siempre perfecto.',
		image:
			'https://images.unsplash.com/photo-1593296402439-e1a270dd253d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		icon: TreeIcon,
		features: [
			'Poda especializada',
			'Control de plagas',
			'Riego automatizado',
			'Fertilización',
		],
	},
	{
		title: 'Instalación y Plantación',
		description:
			'Profesionales en instalación de césped, plantación de árboles y creación de nuevos espacios verdes.',
		image:
			'https://images.unsplash.com/photo-1621272156506-cdbdb6a47243?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		icon: FlowerIcon,
		features: [
			'Plantación de árboles',
			'Instalación de césped',
			'Sistemas de riego',
			'Decoración exterior',
		],
	},
];

export default function JardineriaServices() {
	return (
		<section className='py-20 bg-linear-to-b from-gray-50 to-white'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
						Conectamos con los Mejores Jardineros
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						Nuestra plataforma te conecta con jardineros y paisajistas
						certificados en tu área. Cada profesional ha sido verificado y
						cumple con nuestros estándares de excelencia.
					</p>
				</div>

				<div className='grid md:grid-cols-3 gap-8 mb-16'>
					{services.map((service, index) => (
						<div
							key={index}
							className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden'
						>
							<div className='relative h-64 overflow-hidden'>
								<Image
									src={service.image}
									alt={service.title}
									fill
									className='object-cover group-hover:scale-110 transition-transform duration-500'
								/>
								<div className='absolute inset-0 bg-linear-to-t from-black/50 to-transparent'></div>
								<div className='absolute bottom-4 left-4'>
									<service.icon />
								</div>
							</div>

							<div className='p-6'>
								<h3 className='text-2xl font-bold text-gray-800 mb-3'>
									{service.title}
								</h3>
								<p className='text-gray-600 mb-4 leading-relaxed'>
									{service.description}
								</p>

								<ul className='space-y-2'>
									{service.features.map((feature, idx) => (
										<li
											key={idx}
											className='flex items-center text-sm text-gray-700'
										>
											<div className='w-2 h-2 bg-green-500 rounded-full mr-3'></div>
											{feature}
										</li>
									))}
								</ul>

								<button className='mt-6 w-full bg-linear-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105'>
									Encontrar Jardineros Cerca
								</button>
							</div>
						</div>
					))}
				</div>

				<div className='bg-linear-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-center text-white'>
					<h3 className='text-3xl md:text-4xl font-bold mb-4'>
						¿Listo para Transformar tu Jardín?
					</h3>
					<p className='text-xl mb-8 text-green-100'>
						Te conectamos con jardineros profesionales en tu zona
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button className='flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300'>
							<PhoneIcon />
							<span className='ml-2'>Contactar Ahora</span>
						</button>
						<button className='flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300'>
							<LocationIcon />
							<span className='ml-2'>Buscar en mi Área</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
