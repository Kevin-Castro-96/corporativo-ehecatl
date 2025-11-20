'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SecurityIcon from '@mui/icons-material/Security';
import LanguageIcon from '@mui/icons-material/Language';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { COLORS } from '@/app/constants/colors';

export default function MainHero() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const heroImages = [
		'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1531765408077-9a1f85f90df1?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	];

	// Auto-slide cada 5 segundos
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % heroImages.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [heroImages.length]);

	const handleContactClick = () => {
		window.location.href = '/contact';
	};

	const handleServicesClick = () => {
		window.location.href = '/about-us';
	};

	return (
		<>
			{/* SECCIÓN DE IMÁGENES CON TÍTULO */}
			<section
				className='relative h-[500px] flex items-center justify-center overflow-hidden'
				style={{
					backgroundImage: `url(${heroImages[currentSlide]})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					transition: 'background-image 0.8s ease-in-out',
				}}
			>
				{/* OVERLAY */}
				<div className='absolute inset-0 bg-black/20 bg-opacity-65'></div>

				{/* INDICADORES */}
				<div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2'>
					{heroImages.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`w-3 h-3 rounded-full transition-all ${
								index === currentSlide
									? 'bg-white'
									: 'bg-white bg-opacity-50 hover:bg-opacity-75'
							}`}
						/>
					))}
				</div>

				{/* TÍTULO SOBRE LAS IMÁGENES */}
				<div className='relative z-10 text-center text-white text-shadow-md text-shadow-black'>
					<h1 className='text-4xl md:text-6xl font-bold leading-tight'>
						El futuro en <br />
						<span style={{ color: COLORS.primary }}>tu mano</span>
					</h1>
				</div>
			</section>

			<section className='bg-white py-16'>
				<div className='max-w-6xl mx-auto px-4'>
					<div className='text-center mb-16'>
						<p className='text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8'>
							Transformamos tu visión digital en realidad. Desde{' '}
							<strong>seguridad inteligente</strong> y{' '}
							<strong>hosting web</strong> {' '}
							hasta <strong>posicionamiento en Google</strong> y servicios
							residenciales especializados.
						</p>
						<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
							Conectividad que garantiza tu tranquilidad • Potencia tu presencia
							online • Servicios profesionales en Pachuca
						</p>
					</div>

					<div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
						<button
							onClick={handleContactClick}
							className='flex items-center justify-center gap-2 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-[1.02]'
							style={{ backgroundColor: COLORS.primary }}
						>
							<RocketLaunchIcon fontSize='small' />
							Solicitar Cotización
						</button>

						<button
							onClick={handleServicesClick}
							className='flex items-center justify-center gap-2 border-2 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all'
							style={{ borderColor: COLORS.primary }}
						>
							<ArrowForwardIcon fontSize='small' />
							Ver Servicios
						</button>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16'>
						<Link
							href='/products'
							className='bg-gray-50 hover:bg-gray-100 p-6 rounded-xl transition-all transform hover:scale-[1.05] border border-gray-200 text-center'
						>
							<div className='mb-3 flex justify-center'>
								<SecurityIcon
									style={{ fontSize: '3rem', color: COLORS.primary }}
								/>
							</div>
							<h3 className='font-bold mb-2 text-gray-800'>
								Seguridad Inteligente
							</h3>
							<p className='text-sm text-gray-600'>
								Puertas automáticas y sistemas de seguridad
							</p>
						</Link>

						<Link
							href='/products'
							className='bg-gray-50 hover:bg-gray-100 p-6 rounded-xl transition-all transform hover:scale-[1.05] border border-gray-200 text-center'
						>
							<div className='mb-3 flex justify-center'>
								<LanguageIcon
									style={{ fontSize: '3rem', color: COLORS.primary }}
								/>
							</div>
							<h3 className='font-bold mb-2 text-gray-800'>Hosting Web</h3>
							<p className='text-sm text-gray-600'>
								Servicios en la nube y correos institucionales
							</p>
						</Link>

						<Link
							href='/products'
							className='bg-gray-50 hover:bg-gray-100 p-6 rounded-xl transition-all transform hover:scale-[1.05] border border-gray-200 text-center'
						>
							<div className='mb-3 flex justify-center'>
								<TrendingUpIcon
									style={{ fontSize: '3rem', color: COLORS.primary }}
								/>
							</div>
							<h3 className='font-bold mb-2 text-gray-800'>Posicionamiento</h3>
							<p className='text-sm text-gray-600'>
								Destaca en Google y redes sociales
							</p>
						</Link>

						<Link
							href='/residential-services'
							className='bg-gray-50 hover:bg-gray-100 p-6 rounded-xl transition-all transform hover:scale-[1.05] border border-gray-200 text-center'
						>
							<div className='mb-3 flex justify-center'>
								<HomeIcon style={{ fontSize: '3rem', color: COLORS.primary }} />
							</div>
							<h3 className='font-bold mb-2 text-gray-800'>
								Servicios Residenciales
							</h3>
							<p className='text-sm text-gray-600'>
								Electricistas, jardineros y plomeros
							</p>
						</Link>
					</div>

					<div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12'>
						<div className='text-center'>
							<div
								className='text-3xl md:text-4xl font-bold mb-2'
								style={{ color: COLORS.primary }}
							>
								500+
							</div>
							<div className='text-sm md:text-base text-gray-600'>
								Proyectos Exitosos
							</div>
						</div>
						<div className='text-center'>
							<div
								className='text-3xl md:text-4xl font-bold mb-2'
								style={{ color: COLORS.primary }}
							>
								15+
							</div>
							<div className='text-sm md:text-base text-gray-600'>
								Años de Experiencia
							</div>
						</div>
						<div className='text-center'>
							<div
								className='text-3xl md:text-4xl font-bold mb-2'
								style={{ color: COLORS.primary }}
							>
								100+
							</div>
							<div className='text-sm md:text-base text-gray-600'>
								Empresas Atendidas
							</div>
						</div>
						<div className='text-center'>
							<div
								className='text-3xl md:text-4xl font-bold mb-2'
								style={{ color: COLORS.primary }}
							>
								24/7
							</div>
							<div className='text-sm md:text-base text-gray-600'>
								Soporte Técnico
							</div>
						</div>
					</div>

					{/* INFORMACIÓN DE CONTACTO RÁPIDA */}
					<div className='flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600 text-center'>
						<div className='flex items-center gap-2'>
							<PhoneIcon style={{ color: COLORS.primary }} />
							<span className='font-medium'>771 604 0985</span>
						</div>
						<div className='flex items-center gap-2'>
							<PublicIcon style={{ color: COLORS.primary }} />
							<span className='font-medium'>corporativoehecatl.com.mx</span>
						</div>
						<div className='flex items-center gap-2'>
							<LocationOnIcon style={{ color: COLORS.primary }} />
							<span className='font-medium'>Pachuca, Hidalgo</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
