'use client';
import React from 'react';
import Image from 'next/image';
import { ProductCardProps } from '@/app/types/productsTypes';
import { COLORS } from '@/app/constants/colors';

export default function ProductCard({
	product,
	onBuyProduct,
}: ProductCardProps) {
	return (
		<article className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2'>
			<div className='relative h-48 overflow-hidden bg-gray-50'>
				<Image
					src={product.imageUrl}
					alt={product.name}
					fill
					className='object-cover group-hover:scale-105 transition-transform duration-500'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			</div>

			<div className='p-6'>
				<h3 className='text-lg font-bold text-gray-800 mb-3 min-h-12 flex items-center'>
					{product.name}
				</h3>

				<div className='mb-6'>
					<span
						className='text-2xl font-bold'
						style={{ color: COLORS.primary }}
					>
						${product.price.toLocaleString()}
					</span>
				</div>

				<div className='flex gap-3'>
					<a
						href={product.shopUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='flex-1 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-[1.02] text-center cursor-pointer'
						style={{ backgroundColor: COLORS.primary }}
					>
						Ir a la tienda
					</a>
				</div>
			</div>
		</article>
	);
}
