'use client';
import React from 'react';

export default function ProductsHero() {
	return (
		<section className='py-20 bg-white'>
			<div className='max-w-7xl mx-auto px-4 text-center'>
				<h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
					PRODUCTOS
				</h1>
				<div className='w-24 h-1 bg-linear-to-r from-red-600 to-red-400 mx-auto rounded-full mb-8'></div>
				<p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
					Descubre nuestra amplia gama de productos tecnológicos profesionales.
					Desde chatbots inteligentes hasta sistemas de telefonía IP de última
					generación.
				</p>
			</div>
		</section>
	);
}
