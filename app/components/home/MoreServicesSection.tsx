'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { COLORS } from '@/app/constants/colors';

// Íconos MUI
import BusinessIcon from '@mui/icons-material/Business';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

import BurstModeIcon from '@mui/icons-material/BurstMode';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MessageIcon from '@mui/icons-material/Message';
import AnalyticsIcon from '@mui/icons-material/Analytics';

export default function MoreServicesSection() {
	const services = [
		{
			id: 1,
			title: 'Mensajería Masiva WhatsApp',
			imageUrl: '/services/service1.jpg',
			linkUrl:
				'https://www.facebook.com/photo.php?fbid=770736315096064&set=a.736979101805119&type=3&ref=embed_post',
		},
		{
			id: 2,
			title: 'Email Marketing Masivo',
			imageUrl: '/services/service2.jpg',
			linkUrl:
				'https://www.facebook.com/photo.php?fbid=766217722214590&set=a.736979101805119&type=3&ref=embed_post',
		},
		{
			id: 3,
			title: 'Presencia Digital Corporativa',
			imageUrl: '/services/service3.jpg',
			linkUrl:
				'https://www.facebook.com/photo.php?fbid=764975059005523&set=a.736979101805119&type=3&ref=embed_post',
		},
	];

	const handleServiceClick = (linkUrl: string) => {
		window.open(linkUrl, '_blank', 'noopener,noreferrer');
	};

	return (
		<>
			{/* 🔵 SECCIÓN DIGITALIZACIÓN + CAMPAÑAS SOCIALES */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-6xl mx-auto px-4">

					{/* TÍTULO */}
					<motion.h2
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10"
					>
						Digitalización y{' '}
						<span style={{ color: COLORS.primary }}>Campañas Sociales</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto text-center mb-16"
					>
						En Grupo Beta impulsamos el crecimiento digital mediante herramientas
						tecnológicas, campañas sociales y alianzas estratégicas con transnacionales.
					</motion.p>

					{/* BLOQUES DE INFORMACIÓN */}
					<div className="space-y-10 text-gray-700">

						{/* DIVISIÓN COMERCIAL */}
						<motion.div
							initial={{ opacity: 0, x: -40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
						>
							<div className="flex items-center gap-3 mb-3">
								<BusinessIcon sx={{ fontSize: 32, color: COLORS.primary }} />
								<h3 className="text-2xl font-bold text-gray-800">División Comercial</h3>
							</div>
							<p>
								Liderada por <strong>Corporativo Ehécatl</strong>, dedicada a hosting, dominios,
								diseño web, certificados SSL, identidad corporativa, IA aplicada, Office 365,
								consultoría de imagen, y la Universidad para el Desarrollo Digital.
							</p>
						</motion.div>

						{/* DIVISIÓN FILANTRÓPICA */}
						<motion.div
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
						>
							<div className="flex items-center gap-3 mb-3">
								<VolunteerActivismIcon sx={{ fontSize: 32, color: COLORS.primary }} />
								<h3 className="text-2xl font-bold text-gray-800">División Filantrópica</h3>
							</div>
							<p>
								Encabezada por <strong>Fundación Desarrollemos México</strong>,
								otorga becas de hasta 75% y realiza campañas de donación.
							</p>
						</motion.div>

						{/* ALIANZAS */}
						<motion.div
							initial={{ opacity: 0, x: -40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
						>
							<div className="flex items-center gap-3 mb-3">
								<HandshakeIcon sx={{ fontSize: 32, color: COLORS.primary }} />
								<h3 className="text-2xl font-bold text-gray-800">Alianzas Estratégicas</h3>
							</div>
							<p>
								Acceso a hosting, Google Ads, mailing, pasarelas de pago, chatbots,
								WhatsApp masivo, Office 365 e inteligencia artificial.
							</p>
						</motion.div>

						{/* PAQUETES GOOGLE ADS */}
						<motion.div
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
						>
							<div className="flex items-center gap-3 mb-3">
								<LocalOfferIcon sx={{ fontSize: 32, color: COLORS.primary }} />
								<h3 className="text-2xl font-bold text-gray-800">Créditos Google Ads</h3>
							</div>

							<ul className="list-disc pl-6 space-y-2">
								<li><strong>40% de descuento</strong> para cualquier interesado.</li>
								<li><strong>50% de descuento</strong> con mailing, hosting o IA aplicada.</li>
								<li><strong>60% de descuento</strong> con telefonía IP, chatbots o redes.</li>
								<li><strong>70% de descuento</strong> mediante convenio con la Fundación.</li>
							</ul>
							<p className="mt-2 text-sm text-gray-600">
								Disponibilidad mensual: máx. 10 paquetes (4 ya reservados).
							</p>
						</motion.div>

						{/* REQUISITOS */}
						<motion.div
							initial={{ opacity: 0, x: -40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
						>
							<div className="flex items-center gap-3 mb-3">
								<CheckCircleIcon sx={{ fontSize: 32, color: COLORS.primary }} />
								<h3 className="text-2xl font-bold text-gray-800">Requisitos Básicos</h3>
							</div>

							<ul className="list-disc pl-6 space-y-2">
								<li>Página web con dominio, hosting y SSL.</li>
								<li>Manual de identidad recomendado.</li>
								<li>Correos institucionales y Office 365.</li>
								<li>IA aplicada disponible.</li>
								<li>Verificación Google Ads (hasta 3 días).</li>
							</ul>
						</motion.div>

						{/* NOTAS */}
						<motion.div
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
						>
							<div className="flex items-center gap-3 mb-3">
								<NoteAltIcon sx={{ fontSize: 32, color: COLORS.primary }} />
								<h3 className="text-2xl font-bold text-gray-800">Notas Importantes</h3>
							</div>

							<ul className="list-disc pl-6 space-y-2">
								<li>Prohibida la reventa o traspaso.</li>
								<li>Facturación más IVA (Corporativo Ehécatl).</li>
								<li>Pruebas gratuitas del 5 al 15.</li>
								<li>Pagos del 16 al 21.</li>
								<li>Anticipo del 50% para iniciar.</li>
							</ul>
						</motion.div>

					</div>
				</div>
			</section>

			{/* 🔵 SECCIÓN ORIGINAL – REDES SOCIALES */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='text-center mb-16'>
						<motion.h2
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'
						>
							CAMPAÑAS PARA{' '}
							<span style={{ color: COLORS.primary }}>REDES SOCIALES</span>
						</motion.h2>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className='flex justify-center mb-8'
						>
							<div
								className='w-32 h-1 rounded-full'
								style={{
									background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primary}80)`,
								}}
							></div>
						</motion.div>

						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className='text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'
						>
							Manejo profesional de redes sociales para campañas online,
							diseñado para todo tipo de negocio e imagen pública.
						</motion.p>
					</div>

					{/* TARJETAS */}
					<div className='max-w-5xl mx-auto mb-16'>
						<h3 className='text-3xl font-bold text-center mb-12 text-gray-800'>
							¿Qué incluyen nuestras campañas?
						</h3>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{[
								{ icon: <BurstModeIcon />, title: 'Contenido Atractivo', text: 'Contenido visual y textual que conecta.' },
								{ icon: <EditDocumentIcon />, title: 'Marketing Copy', text: 'Mensajes persuasivos y efectivos.' },
								{ icon: <ScheduleIcon />, title: 'Programación', text: 'Publicaciones semanales programadas.' },
								{ icon: <MessageIcon />, title: 'Mensajería Masiva', text: 'WhatsApp y SMS para alcance directo.' },
								{ icon: <AnalyticsIcon />, title: 'Análisis', text: 'Métricas detalladas y estadísticas.' },
							].map((item, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: i * 0.1 }}
									viewport={{ once: true }}
									className='text-center p-6 bg-white rounded-xl shadow-inner drop-shadow-xl hover:shadow-xl transition-shadow'
								>
									<div className='flex justify-center mb-4'>
										{React.cloneElement(item.icon, { sx: { fontSize: 48, color: COLORS.primary } })}
									</div>
									<h4 className='text-lg font-semibold mb-2 text-gray-800'>{item.title}</h4>
									<p className='text-gray-600 text-sm'>{item.text}</p>
								</motion.div>
							))}
						</div>
					</div>

					{/* EJEMPLOS */}
					<div className='text-center mb-12'>
						<h3 className='text-3xl font-bold text-gray-800 mb-4'>
							Ejemplos de nuestro trabajo
						</h3>
						<p className='text-gray-600 max-w-2xl mx-auto'>
							Conoce algunos de nuestros proyectos en marketing digital.
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
						{services.map((service, i) => (
							<motion.div
								key={service.id}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: i * 0.1 }}
								viewport={{ once: true }}
								className='group cursor-pointer hover:-translate-y-2 transition-transform duration-300'
								onClick={() => handleServiceClick(service.linkUrl)}
							>
								<div className='relative h-96 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
									<Image
										src={service.imageUrl}
										alt={service.title}
										fill
										className='object-cover group-hover:scale-105 transition-transform duration-500'
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw'
									/>
									<div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6'>
										<h4 className='text-white text-lg font-semibold'>
											{service.title}
										</h4>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
