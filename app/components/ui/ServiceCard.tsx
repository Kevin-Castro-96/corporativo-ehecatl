'use client';
import React from 'react';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ServiceCardProps } from '@/app/types';
import { COLORS } from '@/app/constants/colors';

import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import SecurityIcon from '@mui/icons-material/Security';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BusinessIcon from '@mui/icons-material/Business';

const getServiceIcon = (iconName: string) => {
	const iconMap: { [key: string]: React.ReactNode } = {
		home: <HomeIcon sx={{ fontSize: 32, color: 'inherit' }} />,
		phone: <PhoneIcon sx={{ fontSize: 32, color: 'inherit' }} />,
		network: <NetworkCheckIcon sx={{ fontSize: 32, color: 'inherit' }} />,
		security: <SecurityIcon sx={{ fontSize: 32, color: 'inherit' }} />,
		precision_manufacturing: (
			<PrecisionManufacturingIcon sx={{ fontSize: 32, color: 'inherit' }} />
		),
	};
	return (
		iconMap[iconName] || (
			<BusinessIcon sx={{ fontSize: 32, color: 'inherit' }} />
		)
	);
};

export default function ServiceCard({
	service,
	onLearnMore,
}: ServiceCardProps) {
	const handleLearnMore = () => {
		if (onLearnMore) {
			onLearnMore(service);
		} else {
			console.log(`Más información sobre: ${service.title}`);
		}
	};

	return (
		<article className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2'>
			<div className='relative h-56 overflow-hidden'>
				{service.imageUrl ? (
					<>
						<Image
							src={service.imageUrl}
							alt={`Imagen de ${service.title}`}
							fill
							className='object-cover group-hover:scale-110 transition-transform duration-500'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						/>
						<div className='absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300'>
							<div className='absolute top-4 left-4'>
								{service.isPopular && (
									<span className='bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold'>
										Popular
									</span>
								)}
							</div>
							<div className='absolute bottom-4 right-4'>
								<div className='bg-white bg-opacity-90 p-3 rounded-full shadow-lg text-gray-700'>
									{getServiceIcon(service.icon)}
								</div>
							</div>
						</div>
					</>
				) : (
					<div className='absolute inset-0 bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-600'>
						{getServiceIcon(service.icon)}
					</div>
				)}
			</div>

			<div className='p-6'>
				<h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors'>
					{service.title}
				</h3>

				<p className='text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3'>
					{service.description}
				</p>

				<div className='mb-6'>
					<h4 className='text-sm font-semibold text-gray-700 mb-3'>
						Características incluidas:
					</h4>
					<div className='grid grid-cols-1 gap-2'>
						{service.features.slice(0, 3).map((feature, index) => (
							<div
								key={index}
								className='flex items-center text-sm text-gray-600'
							>
								<div
									className='w-2 h-2 rounded-full mr-3 shrink-0'
									style={{ backgroundColor: COLORS.primary }}
								></div>
								{feature}
							</div>
						))}
						{service.features.length > 3 && (
							<div className='text-xs text-gray-500 mt-1'>
								+{service.features.length - 3} características más
							</div>
						)}
					</div>
				</div>

				<button
					onClick={handleLearnMore}
					className='w-full flex items-center justify-center gap-2 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-[1.02] group-hover:shadow-red-200'
					style={{ backgroundColor: COLORS.primary }}
				>
					Más Información
					<ArrowForwardIcon
						fontSize='small'
						className='group-hover:translate-x-1 transition-transform'
					/>
				</button>
			</div>
		</article>
	);
}
