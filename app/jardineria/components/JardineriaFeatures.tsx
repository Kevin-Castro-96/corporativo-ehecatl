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
		title: 'Jardineros Certificados',
		description:
			'Cada profesional cuenta con certificaciones en horticultura, paisajismo y manejo de herramientas especializadas.',
	},
	{
		icon: () => (
			<svg
				className='w-8 h-8 text-white'
				fill='currentColor'
				viewBox='0 0 20 20'
			>
				<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
			</svg>
		),
		title: 'Experiencia Comprobada',
		description:
			'Seleccionamos jardineros con años de experiencia y portafolio demostrable en proyectos similares.',
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
		title: 'Cobertura Local',
		description:
			'Red de profesionales en toda tu zona que conocen el clima y las plantas ideales para tu región.',
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
			'Cotizaciones detalladas sin costos ocultos. Conoce el precio exacto antes de comenzar cualquier proyecto.',
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
		title: 'Planificación Estacional',
		description:
			'Profesionales que planifican trabajos según las estaciones para obtener los mejores resultados.',
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
					d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
					clipRule='evenodd'
				/>
			</svg>
		),
		title: 'Técnicas Sustentables',
		description:
			'Enfoque en prácticas ecológicas, uso eficiente del agua y selección de plantas nativas.',
	},
];

export default function JardineriaFeatures() {
	return (
		<section className='py-20 bg-linear-to-br from-green-50 to-emerald-50'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
						¿Por Qué Confiar en Nosotros?
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						Seleccionamos cuidadosamente a cada jardinero para garantizar que tu
						espacio verde sea tratado con la experiencia y pasión que merece.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
						>
							<div className='flex items-center justify-center w-16 h-16 bg-linear-to-r from-green-500 to-emerald-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300'>
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
							Nuestro Proceso de Selección
						</h3>
						<p className='text-gray-600 text-lg leading-relaxed mb-6'>
							Solo trabajamos con jardineros que demuestran excelencia en su
							oficio. Cada profesional debe pasar por nuestro riguroso proceso
							de evaluación antes de poder formar parte de nuestra red.
						</p>
						<div className='space-y-4'>
							<div className='flex items-center'>
								<CheckIcon />
								<span className='ml-3 text-gray-700'>
									Verificación de experiencia y certificaciones
								</span>
							</div>
							<div className='flex items-center'>
								<CheckIcon />
								<span className='ml-3 text-gray-700'>
									Revisión de portafolio y trabajos anteriores
								</span>
							</div>
							<div className='flex items-center'>
								<CheckIcon />
								<span className='ml-3 text-gray-700'>
									Conocimiento en plantas y técnicas locales
								</span>
							</div>
							<div className='flex items-center'>
								<CheckIcon />
								<span className='ml-3 text-gray-700'>
									Evaluación continua de calidad del servicio
								</span>
							</div>
							<div className='flex items-center'>
								<CheckIcon />
								<span className='ml-3 text-gray-700'>
									Compromiso con prácticas sustentables
								</span>
							</div>
						</div>
					</div>

					<div className='relative'>
						<div className='aspect-square rounded-3xl overflow-hidden shadow-2xl'>
							<img
								src='https://images.unsplash.com/photo-1612376220559-b94c77c7bbc7?q=80&w=1063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt='Jardinero profesional trabajando'
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl'>
							<div className='text-center'>
								<div className='text-3xl font-bold text-green-600'>100%</div>
								<div className='text-gray-600 text-sm'>Proyectos Exitosos</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
