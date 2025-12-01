import Image from 'next/image';
import Link from 'next/link';

export default function PlumberiaHero() {
	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-blue-900 via-blue-800 to-teal-700'>
			<div className='absolute inset-0 z-0'>
				<Image
					src='https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
					alt='Plomero profesional trabajando'
					fill
					className='object-cover opacity-20'
					priority
				/>
			</div>

			<div className='absolute inset-0 z-10 bg-linear-to-r from-blue-900/80 via-transparent to-teal-800/80'></div>

			<div className='container mx-auto px-4 z-20 text-center text-white'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
						Encuentra el
						<span className='block text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-teal-300'>
							Plomero Perfecto
						</span>
						en tu Zona
					</h1>

					<p className='text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed'>
						Te conectamos con los mejores plomeros profesionales cerca de ti.
						Todos nuestros especialistas están verificados y certificados.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
						<Link href="/register">
						<button className='bg-linear-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl'>
							Encontrar Plomeros Ahora
						</button>
						</Link>
						<Link href='#services'>
						<button className='border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300'>
							servicios disponibles
						</button>
						</Link>
					</div>

					<div className='mt-12 flex flex-wrap justify-center gap-8 text-blue-200'>
						<div className='flex items-center'>
							<div className='w-3 h-3 bg-green-400 rounded-full mr-2'></div>
							<span>Profesionales Verificados</span>
						</div>
						<div className='flex items-center'>
							<div className='w-3 h-3 bg-green-400 rounded-full mr-2'></div>
							<span>Cobertura 24/7</span>
						</div>
						<div className='flex items-center'>
							<div className='w-3 h-3 bg-green-400 rounded-full mr-2'></div>
							<span>Garantía de Calidad</span>
						</div>
					</div>
				</div>

				<div className='absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-bounce delay-300'></div>
				<div className='absolute bottom-32 right-16 w-16 h-16 bg-teal-400/20 rounded-full animate-bounce delay-700'></div>
			</div>
		</section>
	);
}
