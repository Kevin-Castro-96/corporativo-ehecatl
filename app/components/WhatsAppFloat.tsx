'use client';
import React, { useState, useEffect } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppFloat() {
	const [isVisible, setIsVisible] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);
	// cambiar numero de wsp
	const whatsappNumber = '5217716040985';
	const defaultMessage = encodeURIComponent(
		'¡Hola! Me interesa obtener información sobre los servicios de Corporativo Ehécatl.'
	);

	const handleWhatsAppClick = () => {
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;
		window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
	};

	if (!isVisible) return null;

	return (
		<>
			<div
				className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
					isHovered ? 'scale-110' : 'scale-100'
				}`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<button
					onClick={handleWhatsAppClick}
					className='bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group'
					style={{
						width: '60px',
						height: '60px',
						animation: 'pulse 2s infinite',
					}}
					aria-label='Contactar por WhatsApp'
				>
					<WhatsAppIcon
						fontSize='large'
						className='group-hover:scale-110 transition-transform duration-200'
					/>
				</button>

				<div
					className={`absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap transition-opacity duration-300 ${
						isHovered ? 'opacity-100' : 'opacity-0'
					}`}
					style={{ transform: 'translateX(10px)' }}
				>
					¿Necesitas ayuda? ¡Chatea con nosotros!
					<div className='absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800'></div>
				</div>
			</div>

			<div
				className='fixed bottom-6 right-6 z-40 pointer-events-none'
				style={{
					width: '60px',
					height: '60px',
					animation: 'ripple 3s infinite',
				}}
			>
				<div className='w-full h-full rounded-full bg-green-400 opacity-30'></div>
			</div>

			<style jsx>{`
				@keyframes pulse {
					0%,
					100% {
						transform: scale(1);
					}
					50% {
						transform: scale(1.05);
					}
				}

				@keyframes ripple {
					0% {
						transform: scale(1);
						opacity: 0.6;
					}
					100% {
						transform: scale(1.5);
						opacity: 0;
					}
				}

				/* Ocultar en pantallas muy pequeñas si es necesario */
				@media (max-width: 480px) {
					.fixed.bottom-6.right-6 {
						bottom: 1rem;
						right: 1rem;
					}
				}
			`}</style>
		</>
	);
}
