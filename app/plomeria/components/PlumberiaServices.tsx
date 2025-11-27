import Image from 'next/image';

const HomeIcon = () => (
	<svg className='w-12 h-12 text-white' fill='currentColor' viewBox='0 0 20 20'>
		<path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
	</svg>
);

const BuildIcon = () => (
	<svg className='w-12 h-12 text-white' fill='currentColor' viewBox='0 0 20 20'>
		<path
			fillRule='evenodd'
			d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
			clipRule='evenodd'
		/>
	</svg>
);

const SecurityIcon = () => (
	<svg className='w-12 h-12 text-white' fill='currentColor' viewBox='0 0 20 20'>
		<path
			fillRule='evenodd'
			d='M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
			clipRule='evenodd'
		/>
	</svg>
);

const PhoneIcon = () => (
	<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
		<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
	</svg>
);

const ScheduleIcon = () => (
	<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
		<path
			fillRule='evenodd'
			d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
			clipRule='evenodd'
		/>
	</svg>
);

const services = [
	{
		title: 'Instalaciones Completas',
		description:
			'Instalación de sistemas completos de agua potable, drenaje y gas para construcciones nuevas.',
		image:
			'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		icon: HomeIcon,
		features: [
			'Tuberías de agua',
			'Sistemas de drenaje',
			'Instalación de gas',
			'Calentadores',
		],
	},
	{
		title: 'Reparaciones Urgentes',
		description:
			'Servicio de emergencia 24/7 para fugas, obstrucciones y fallas en el sistema hidráulico.',
		image:
			'https://images.unsplash.com/photo-1749532125405-70950966b0e5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		icon: BuildIcon,
		features: [
			'Fugas de agua',
			'Destapado de drenajes',
			'Reparación de llaves',
			'Emergencias 24/7',
		],
	},
	{
		title: 'Mantenimiento Preventivo',
		description:
			'Programas de mantenimiento para prevenir problemas y extender la vida útil de tus instalaciones.',
		image:
			'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		icon: SecurityIcon,
		features: [
			'Revisión periódica',
			'Limpieza de tuberías',
			'Calibración de equipos',
			'Reportes detallados',
		],
	},
];

export default function PlumberiaServices() {
	return (
		<section className='py-20 bg-linear-to-b from-gray-50 to-white'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
						Conectamos con los Mejores Plomeros
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						Nuestra plataforma te conecta con profesionales certificados en tu
						área. Cada plomero en nuestra red ha sido verificado y cumple con
						nuestros estándares de calidad.
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
											<div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
											{feature}
										</li>
									))}
								</ul>

								<button className='mt-6 w-full bg-linear-to-r from-blue-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105'>
									Encontrar Plomeros Cerca
								</button>
							</div>
						</div>
					))}
				</div>

				<div className='bg-linear-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white'>
					<h3 className='text-3xl md:text-4xl font-bold mb-4'>
						¿Necesitas un Plomero Ahora?
					</h3>
					<p className='text-xl mb-8 text-blue-100'>
						Te conectamos con profesionales verificados en tu zona en minutos
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button className='flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300'>
							<PhoneIcon />
							<span className='ml-2'>Llamar Ahora</span>
						</button>
						<button className='flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300'>
							<ScheduleIcon />
							<span className='ml-2'>Buscar en mi Área</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
