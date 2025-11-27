import Image from 'next/image';

export default function ElectricistaHero() {
	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-yellow-900 via-orange-800 to-red-700'>
			<div className='absolute inset-0 z-0'>
				<Image
					src='https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
					alt='Electricista profesional trabajando'
					fill
					className='object-cover opacity-25'
					priority
				/>
			</div>

			<div className='absolute inset-0 z-10 bg-linear-to-r from-yellow-900/80 via-transparent to-orange-800/80'></div>

			<div className='container mx-auto px-4 z-20 text-center text-white'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
						Encuentra el
						<span className='block text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-orange-300'>
							Electricista Perfecto
						</span>
						en tu Zona
					</h1>

					<p className='text-xl md:text-2xl mb-8 text-yellow-100 max-w-3xl mx-auto leading-relaxed'>
						Te conectamos con electricistas certificados y experimentados cerca
						de ti. Profesionales verificados para todas tus necesidades
						eléctricas.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
						<button className='bg-linear-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl'>
							Encontrar Electricistas Ahora
						</button>
						<button className='border-2 border-white text-white hover:bg-white hover:text-yellow-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300'>
							Ver Servicios
						</button>
					</div>

					<div className='mt-12 flex flex-wrap justify-center gap-8 text-yellow-200'>
						<div className='flex items-center'>
							<div className='w-3 h-3 bg-yellow-400 rounded-full mr-2'></div>
							<span>Electricistas Certificados</span>
						</div>
						<div className='flex items-center'>
							<div className='w-3 h-3 bg-yellow-400 rounded-full mr-2'></div>
							<span>Emergencias 24/7</span>
						</div>
						<div className='flex items-center'>
							<div className='w-3 h-3 bg-yellow-400 rounded-full mr-2'></div>
							<span>Seguridad Garantizada</span>
						</div>
					</div>
				</div>

				<div className='absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-bounce delay-300'></div>
				<div className='absolute bottom-32 right-16 w-16 h-16 bg-orange-400/20 rounded-full animate-bounce delay-700'></div>
				<div className='absolute top-40 right-20 w-12 h-12 bg-red-400/30 rounded-full animate-pulse delay-500'></div>
			</div>
		</section>
	);
}
