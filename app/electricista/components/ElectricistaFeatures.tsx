const CheckIcon = () => (
	<svg
		className='w-6 h-6 text-green-500'
		fill='currentColor'
		viewBox='0 0 20 20'
	>
		<path
			fillRule='evenodd'
			d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
			clipRule='evenodd'
		/>
	</svg>
);

const features = [
	{
		icon: () => (
			<svg
				className='w-8 h-8 text-white'
				fill='currentColor'
				viewBox='0 0 20 20'
			>
				<path
					fillRule='evenodd'
					d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
					clipRule='evenodd'
				/>
			</svg>
		),
		title: 'Electricistas Certificados',
		description:
			'Cada profesional cuenta con licencias vigentes, certificaciones de seguridad y años de experiencia comprobable.',
	},
	{
		icon: () => (
			<svg
				className='w-8 h-8 text-white'
				fill='currentColor'
				viewBox='0 0 20 20'
			>
				<path
					fillRule='evenodd'
					d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z'
					clipRule='evenodd'
				/>
			</svg>
		),
		title: 'Seguridad Prioritaria',
		description:
			'Todos nuestros electricistas siguen protocolos estrictos de seguridad y cumplen con normativas vigentes.',
	},
	{
		icon: () => (
			<svg
				className='w-8 h-8 text-white'
				fill='currentColor'
				viewBox='0 0 20 20'
			>
				<path
					fillRule='evenodd'
					d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
					clipRule='evenodd'
				/>
			</svg>
		),
		title: 'Respuesta Rápida',
		description:
			'Para emergencias eléctricas, contamos con profesionales disponibles 24/7 en toda tu zona.',
	},
	{
		icon: () => (
			<svg
				className='w-8 h-8 text-white'
				fill='currentColor'
				viewBox='0 0 20 20'
			>
				<path d='M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z' />
			</svg>
		),
		title: 'Presupuestos Claros',
		description:
			'Cotizaciones detalladas y transparentes. Conoce el costo exacto antes de comenzar cualquier trabajo.',
	},
	{
		icon: () => (
			<svg
				className='w-8 h-8 text-white'
				fill='currentColor'
				viewBox='0 0 20 20'
			>
				<path
					fillRule='evenodd'
					d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
					clipRule='evenodd'
				/>
			</svg>
		),
		title: 'Cobertura Total',
		description:
			'Red de electricistas en toda tu zona que conocen las regulaciones y códigos eléctricos locales.',
	},
	{
		icon: () => (
			<svg
				className='w-8 h-8 text-white'
				fill='currentColor'
				viewBox='0 0 20 20'
			>
				<path
					fillRule='evenodd'
					d='M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
					clipRule='evenodd'
				/>
			</svg>
		),
		title: 'Garantía de Calidad',
		description:
			'Monitoreo continuo de calidad del servicio y garantía en todos los trabajos realizados.',
	},
];

export default function ElectricistaFeatures() {
	return (
		<section className='py-20 bg-linear-to-br from-yellow-50 to-orange-50'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
						Seguridad y Confianza Garantizada
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						La electricidad no es algo con lo que se juegue. Por eso
						seleccionamos únicamente electricistas con la máxima calificación y
						experiencia en el sector.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
						>
							<div className='flex items-center justify-center w-16 h-16 bg-linear-to-r from-yellow-500 to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300'>
								<feature.icon />
							</div>

							<h3 className='text-2xl font-bold text-gray-800 mb-4'>
								{feature.title}
							</h3>
							<p className='text-gray-600 leading-relaxed'>
								{feature.description}
							</p>
						</div>
					))}
				</div>

				<div className='mt-20 grid md:grid-cols-2 gap-12 items-center'>
					<div>
						<h3 className='text-3xl font-bold text-gray-800 mb-6'>
							Nuestros Estándares de Selección
						</h3>
						<p className='text-gray-600 text-lg leading-relaxed mb-6'>
							Trabajar con electricidad requiere máxima precisión y seguridad.
							Cada electricista en nuestra plataforma debe demostrar excelencia
							técnica y cumplimiento riguroso de normas de seguridad.
						</p>
						<div className='space-y-4'>
							<div className='flex items-center'>
								<CheckIcon />
								<span className='ml-3 text-gray-700'>
									Licencias profesionales vigentes y actualizadas
								</span>
							</div>
							<div className='flex items-center'>
								<CheckIcon />
								<span className='ml-3 text-gray-700'>
									Certificaciones en normativas de seguridad
								</span>
							</div>
							<div className='flex items-center'>
								<CheckIcon />
								<span className='ml-3 text-gray-700'>
									Experiencia mínima de 5 años comprobable
								</span>
							</div>
							<div className='flex items-center'>
								<CheckIcon />
								<span className='ml-3 text-gray-700'>
									Seguro de responsabilidad civil
								</span>
							</div>
							<div className='flex items-center'>
								<CheckIcon />
								<span className='ml-3 text-gray-700'>
									Evaluación continua de calidad del servicio
								</span>
							</div>
						</div>
					</div>

					<div className='relative'>
						<div className='aspect-square rounded-3xl overflow-hidden shadow-2xl'>
							<img
								src='https://images.unsplash.com/photo-1553873002-785d775854c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt='Electricista profesional con herramientas'
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl'>
							<div className='text-center'>
								<div className='text-3xl font-bold text-yellow-600'>100%</div>
								<div className='text-gray-600 text-sm'>
									Trabajos Sin Incidentes
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
