'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const stats = [
	{ number: 2600, label: 'Instalaciones Completadas', suffix: '+' },
	{ number: 100, label: 'Índice de Seguridad', suffix: '%' },
	{ number: 24, label: 'Servicio de Emergencia', suffix: '/7' },
	{ number: 100, label: 'Electricistas Certificados', suffix: '+' },
];

export default function ElectricistaStats() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<section className='py-20 bg-linear-to-r from-yellow-600 via-orange-700 to-red-600 relative overflow-hidden'>
			<div className='absolute inset-0 opacity-10'>
				<div className='absolute top-10 left-10 w-32 h-32 border border-white rounded-full'></div>
				<div className='absolute bottom-16 right-20 w-24 h-24 border border-white rounded-full'></div>
				<div className='absolute top-32 right-32 w-16 h-16 bg-white/20 rounded-full'></div>
				<div className='absolute bottom-32 left-32 w-20 h-20 bg-white/15 rounded-full'></div>
				<div className='absolute top-1/2 left-1/4 transform -translate-y-1/2 opacity-5'>
					<svg className='w-32 h-32' fill='white' viewBox='0 0 20 20'>
						<path
							fillRule='evenodd'
							d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
			</div>

			<div className='container mx-auto px-4 relative z-10'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						Energizamos tu Confianza
					</h2>
					<p className='text-xl text-yellow-100 max-w-3xl mx-auto'>
						Miles de proyectos eléctricos exitosos respaldan nuestra reputación.
						La seguridad y calidad son nuestros pilares fundamentales.
					</p>
				</div>

				<div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
					{stats.map((stat, index) => (
						<div key={index} className='text-center group'>
							<div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105'>
								<div className='text-4xl md:text-6xl font-bold text-white mb-2'>
									{isVisible ? (
										<CountUp end={stat.number} suffix={stat.suffix} />
									) : (
										'0'
									)}
								</div>
								<div className='text-yellow-100 text-lg font-medium'>
									{stat.label}
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='mt-20 text-center'>
					<h3 className='text-3xl font-bold text-white mb-6'>
						¿Necesitas un Electricista de Confianza?
					</h3>
					<p className='text-xl text-yellow-100 mb-8 max-w-2xl mx-auto'>
						No arriesgues tu seguridad. Conecta con electricistas profesionales
						que garantizan trabajos seguros y de calidad.
					</p>
					<Link href="/register">
					<button className='bg-white text-yellow-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl'>
						Encontrar mi Electricista Ideal
					</button>
					</Link>
				</div>
			</div>
		</section>
	);
}

function CountUp({ end, suffix }: { end: number; suffix: string }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const duration = 2000;
		const steps = 60;
		const stepValue = end / steps;
		const stepDuration = duration / steps;

		let currentStep = 0;
		const timer = setInterval(() => {
			currentStep++;
			setCount(Math.min(Math.floor(stepValue * currentStep), end));

			if (currentStep >= steps) {
				clearInterval(timer);
			}
		}, stepDuration);

		return () => clearInterval(timer);
	}, [end]);

	return (
		<>
			{count}
			{suffix}
		</>
	);
}
