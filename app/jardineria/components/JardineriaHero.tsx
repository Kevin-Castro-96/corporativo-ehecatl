import Image from 'next/image';

export default function JardineriaHero() {
	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-green-900 via-emerald-800 to-teal-700'>
			<div className='absolute inset-0 z-0'>
				<Image
					src='https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
					alt='Jardín profesional y paisajismo'
					fill
					className='object-cover opacity-25'
					priority
				/>
			</div>

			<div className='absolute inset-0 z-10 bg-linear-to-r from-green-900/80 via-transparent to-emerald-800/80'></div>

			<div className='container mx-auto px-4 z-20 text-center text-white'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
						Encuentra el
						<span className='block text-transparent bg-clip-text bg-linear-to-r from-green-300 to-emerald-300'>
							Jardinero Perfecto
						</span>
						en tu Zona
					</h1>

					<p className='text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed'>
						Te conectamos con jardineros y paisajistas profesionales cerca de
						ti. Expertos verificados en diseño, mantenimiento y cuidado de
						jardines.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
						<button className='bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl'>
							Encontrar Jardineros Ahora
						</button>
						<button className='border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300'>
							Ver Servicios
						</button>
					</div>

					<div className='mt-12 flex flex-wrap justify-center gap-8 text-green-200'>
						<div className='flex items-center'>
							<div className='w-3 h-3 bg-emerald-400 rounded-full mr-2'></div>
							<span>Jardineros Certificados</span>
						</div>
						<div className='flex items-center'>
							<div className='w-3 h-3 bg-emerald-400 rounded-full mr-2'></div>
							<span>Diseño Personalizado</span>
						</div>
						<div className='flex items-center'>
							<div className='w-3 h-3 bg-emerald-400 rounded-full mr-2'></div>
							<span>Mantenimiento Continuo</span>
						</div>
					</div>
				</div>

				<div className='absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full animate-bounce delay-300'></div>
				<div className='absolute bottom-32 right-16 w-16 h-16 bg-emerald-400/20 rounded-full animate-bounce delay-700'></div>
				<div className='absolute top-40 right-20 w-12 h-12 bg-teal-400/30 rounded-full animate-pulse delay-500'></div>
			</div>
		</section>
	);
}
