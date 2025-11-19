'use client';
import React from 'react';

export default function ResidentialCTA() {
	return (
		<section className='py-16 bg-white'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto text-center'>
					<h3 className='text-2xl font-bold text-gray-800 mb-4'>
						¿Necesitas alguno de estos servicios?
					</h3>
					<p className='text-gray-600 mb-6'>
						Conectamos a profesionales expertos con clientes que necesitan
						servicios de calidad en Pachuca.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button
							className='bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
							onClick={() => (window.location.href = '/contact')}
						>
							Solicitar Servicio
						</button>
						<button
							className='border-2 border-red-600 text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition-all'
							onClick={() => (window.location.href = '/contact')}
						>
							Más Información
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
