'use client';
import React from 'react';
import ProductsHero from '../components/products/ProductsHero';
import ProductsGrid from '../components/products/ProductsGrid';

export default function Products() {
	return (
		<main className='bg-gray-50 min-h-screen'>
			<ProductsHero />
			<ProductsGrid />
		</main>
	);
}
