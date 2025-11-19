'use client';
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { productsData, getProductsByCategory } from '@/app/data/productsData';
import { Product } from '@/app//types/productsTypes';

export default function ProductsGrid() {
	const [selectedCategory, setSelectedCategory] = useState<string>('');
	const [filteredProducts, setFilteredProducts] =
		useState<Product[]>(productsData);

	const categories = [
		{ id: '', label: 'Todos los productos' },
		{ id: 'chatbot', label: 'Chatbots' },
		{ id: 'telefonia', label: 'Telefonía IP' },
		{ id: 'comunicaciones', label: 'Comunicaciones' },
		{ id: 'luces', label: 'Iluminación Inteligente' },
	];

	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category);
		setFilteredProducts(getProductsByCategory(category || undefined));
	};

	const handleViewProduct = (product: Product) => {
		console.log('Ver producto:', product);
		alert(`Ver detalles de: ${product.name}`);
	};

	const handleBuyProduct = (product: Product) => {
		console.log('Ir a tienda:', product);
		alert(`Ir a la tienda para: ${product.name}`);
	};

	return (
		<section className='py-16 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='mb-12'>
					<div className='flex flex-wrap justify-center gap-4'>
						{categories.map((category) => (
							<button
								key={category.id}
								onClick={() => handleCategoryChange(category.id)}
								className={`px-6 py-3 rounded-lg font-medium transition-all ${
									selectedCategory === category.id
										? 'bg-red-600 text-white shadow-lg'
										: 'bg-white text-gray-700 hover:bg-red-50 border border-gray-200'
								}`}
							>
								{category.label}
							</button>
						))}
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filteredProducts.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
							onViewProduct={handleViewProduct}
							onBuyProduct={handleBuyProduct}
						/>
					))}
				</div>

				<div className='mt-16 text-center'>
					<div className='bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg'>
						<h3 className='text-2xl font-bold text-gray-800 mb-4'>
							¿Necesitas una solución personalizada?
						</h3>
						<p className='text-gray-600 mb-6'>
							Contamos con expertos que pueden ayudarte a encontrar el producto
							perfecto para tu negocio.
						</p>
						<button
							className='bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
							onClick={() => (window.location.href = '/contact')}
						>
							Solicitar Asesoría
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
