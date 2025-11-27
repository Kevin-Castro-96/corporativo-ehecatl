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
		title: 'Plomeros Verificados',
		description:
			'Cada profesional pasa por un riguroso proceso de verificación de antecedentes, licencias y experiencia.',
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
			'Utilizamos tu ubicación para conectarte con los mejores plomeros disponibles en tu zona.',
	},
	{
		icon: () => (
			<svg
				className='w-8 h-8 text-white'
				fill='currentColor'
				viewBox='0 0 20 20'
			>
				<path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
			</svg>
		),
		title: 'Precios Transparentes',
		description:
			'Conoce el costo estimado antes de contratar. Sin sorpresas ni costos ocultos en el proceso.',
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
			'Conectamos contigo en minutos. Para emergencias, tenemos plomeros disponibles 24/7.',
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
		title: 'Calidad Garantizada',
		description:
			'Monitoreamos la calidad del servicio y garantizamos tu satisfacción en cada trabajo realizado.',
	},
	{
		icon: () => (
			<svg
				className='w-8 h-8 text-white'
				fill='currentColor'
				viewBox='0 0 20 20'
			>
				<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
			</svg>
		),
		title: 'Soporte Continuo',
		description:
			'Nuestro equipo te acompaña durante todo el proceso, desde la búsqueda hasta la finalización del trabajo.',
	},
];

export default function PlumberiaFeatures() {
	return (
		<section className='py-20 bg-linear-to-br from-blue-50 to-teal-50'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
						Nuestro Compromiso Contigo
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						Seleccionamos cuidadosamente a cada plomero en nuestra red para
						garantizar que recibas el mejor servicio posible.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
						>
							<div className='flex items-center justify-center w-16 h-16 bg-linear-to-r from-blue-500 to-teal-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300'>
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
							Cómo Seleccionamos a Nuestros Plomeros
						</h3>
						<p className='text-gray-600 text-lg leading-relaxed mb-6'>
							No cualquier plomero puede unirse a nuestra plataforma. Cada
							profesional debe cumplir con nuestros estrictos estándares de
							calidad y servicio antes de poder atender a nuestros clientes.
						</p>
						<div className='space-y-4'>
							<div className='flex items-center'>
								<CheckIcon />
								<span className='ml-3 text-gray-700'>
									Verificación de licencias y certificaciones
								</span>
							</div>
							<div className='flex items-center'>
								<CheckIcon />
								<span className='ml-3 text-gray-700'>
									Revisión de antecedentes y referencias
								</span>
							</div>
							<div className='flex items-center'>
								<CheckIcon />
								<span className='ml-3 text-gray-700'>
									Evaluación de experiencia y habilidades técnicas
								</span>
							</div>
							<div className='flex items-center'>
								<CheckIcon />
								<span className='ml-3 text-gray-700'>
									Monitoreo continuo de calidad del servicio
								</span>
							</div>
						</div>
					</div>

					<div className='relative'>
						<div className='aspect-square rounded-3xl overflow-hidden shadow-2xl'>
							<img
								src='https://images.unsplash.com/photo-1676210134188-4c05dd172f89?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt='Proceso de selección de plomeros'
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl'>
							<div className='text-center'>
								<div className='text-3xl font-bold text-blue-600'>100%</div>
								<div className='text-gray-600 text-sm'>
									Satisfacción del Cliente
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
