'use client';
import React from 'react';
import { COLORS } from '@/app/constants/colors';

export default function ResidentialHero() {
	return (
		<section 
			className='relative h-[400px] flex items-center justify-center'
			style={{
				backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&auto=format&fit=crop&ixlib=rb-4.0.3)',
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
		>
			<div className='absolute inset-0 bg-black/20 bg-opacity-50'></div>
			
			<div className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'>
				<h1 className='text-4xl md:text-6xl font-bold mb-6'>
					Servicios <span style={{ color: COLORS.primary }}>Residenciales</span>
				</h1>
				<div className='w-24 h-1 bg-red-600 mx-auto rounded-full mb-6'></div>
			</div>
		</section>
	);
}