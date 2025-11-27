'use client';

import { useEffect, useState } from 'react';

const stats = [
	{ number: 2500, label: 'Servicios Brindados', suffix: '+' },
	{ number: 100, label: 'Satisfacción del Cliente', suffix: '%' },
	{ number: 24, label: 'Servicio de Emergencia', suffix: '/7' },
	{ number: 10, label: 'Años de Experiencia', suffix: '+' },
];

export default function PlumberiaStats() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<section className='py-20 bg-linear-to-r from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden'>
			<div className='absolute inset-0 opacity-10'>
				<div className='absolute top-10 left-10 w-32 h-32 border border-white rounded-full'></div>
				<div className='absolute bottom-16 right-20 w-24 h-24 border border-white rounded-full'></div>
				<div className='absolute top-32 right-32 w-16 h-16 bg-white/20 rounded-full'></div>
			</div>

			<div className='container mx-auto px-4 relative z-10'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						Números que Hablan por Nosotros
					</h2>
					<p className='text-xl text-blue-100 max-w-3xl mx-auto'>
						La confianza de nuestros clientes se refleja en cada proyecto
						completado y cada problema resuelto con excelencia.
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
								<div className='text-blue-100 text-lg font-medium'>
									{stat.label}
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='mt-20 text-center'>
					<h3 className='text-3xl font-bold text-white mb-6'>
						¿Listo para Comenzar tu Proyecto?
					</h3>
					<p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
						Contáctanos hoy mismo y descubre por qué somos la primera opción en
						servicios de plomería profesional.
					</p>
					<button className='bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl'>
						Más Información
					</button>
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
