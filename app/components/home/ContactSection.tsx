'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { COLORS } from '@/app/constants/colors';

interface ContactFormData {
	name: string;
	email: string;
	phone: string;
	service: string;
	message: string;
}

export default function ContactSection() {
	const [formData, setFormData] = useState<ContactFormData>({
		name: '',
		email: '',
		phone: '',
		service: '',
		message: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState<{
		type: 'success' | 'error';
		text: string;
	} | null>(null);

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setMessage(null);

		try {
			//integrar back
			await new Promise((resolve) => setTimeout(resolve, 1000));

			setMessage({
				type: 'success',
				text: 'Mensaje enviado correctamente. Te contactaremos pronto.',
			});
			setFormData({
				name: '',
				email: '',
				phone: '',
				service: '',
				message: '',
			});
		} catch (error) {
			console.error('Error:', error);
			setMessage({
				type: 'error',
				text: 'Error de conexión. Intenta nuevamente.',
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='w-full min-h-screen px-4 py-10 bg-gray-50'>
			<div className='max-w-6xl mx-auto mb-16'>
				<div className='text-center mb-12'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
						CONTACTO
					</h2>
					<div className='flex justify-center mb-8'>
						<div
							className='w-32 h-1 rounded-full'
							style={{
								background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primary}80)`,
							}}
						></div>
					</div>
					<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
						No dudes en ponerte en contacto con nosotros; estaremos encantados
						de atenderte.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
					<div className='text-center p-6 bg-white rounded-xl shadow-lg'>
						<div className='flex justify-center mb-4'>
							<div
								className='w-16 h-16 rounded-full flex items-center justify-center'
								style={{ backgroundColor: `${COLORS.primary}15` }}
							>
								<PhoneIcon sx={{ fontSize: 32, color: COLORS.primary }} />
							</div>
						</div>
						<h3 className='font-semibold text-gray-800 text-lg mb-2'>
							Teléfono
						</h3>
						<p className='text-gray-600'>771 604 0985</p>
					</div>

					<div className='text-center p-6 bg-white rounded-xl shadow-lg'>
						<div className='flex justify-center mb-4'>
							<div
								className='w-16 h-16 rounded-full flex items-center justify-center'
								style={{ backgroundColor: `${COLORS.primary}15` }}
							>
								<EmailIcon sx={{ fontSize: 32, color: COLORS.primary }} />
							</div>
						</div>
						<h3 className='font-semibold text-gray-800 text-lg mb-2'>Email</h3>
						<p className='text-gray-600 text-sm'>
							contacto@corporativoehecatl.com.mx
						</p>
					</div>

					<div className='text-center p-6 bg-white rounded-xl shadow-lg'>
						<div className='flex justify-center mb-4'>
							<div
								className='w-16 h-16 rounded-full flex items-center justify-center'
								style={{ backgroundColor: `${COLORS.primary}15` }}
							>
								<LocationOnIcon sx={{ fontSize: 32, color: COLORS.primary }} />
							</div>
						</div>
						<h3 className='font-semibold text-gray-800 text-lg mb-2'>
							Ubicación
						</h3>
						<p className='text-gray-600'>Pachuca, Hidalgo</p>
					</div>
				</div>
			</div>

			{/*REDES SOCIALES */}
			<div className='max-w-6xl mx-auto mb-16'>
				<div className='text-center mb-12'>
					<h3 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
						SÍGUENOS EN{' '}
						<span style={{ color: COLORS.primary }}>REDES SOCIALES</span>
					</h3>
					<div className='flex justify-center mb-8'>
						<div
							className='w-32 h-1 rounded-full'
							style={{
								background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primary}80)`,
							}}
						></div>
					</div>
					<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
						Mantente al día con nuestros proyectos, noticias y contenido
						exclusivo
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					{/* FACEBOOK */}
					<div className='bg-white rounded-xl shadow-lg p-6'>
						<div className='flex items-center gap-3 mb-6'>
							<FacebookIcon sx={{ fontSize: 32, color: '#1877F2' }} />
							<div>
								<h4 className='text-xl font-bold text-gray-800'>Facebook</h4>
								<p className='text-gray-600'>
									Últimas publicaciones y noticias
								</p>
							</div>
						</div>

						{/*IMAGEN DE FONDO */}
						<div
							className='relative rounded-lg p-6 text-center overflow-hidden'
							style={{
								backgroundImage: 'url("/corporativofb.jpg")',
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							<div className='absolute inset-0 bg-black/50'></div>

							<div className='relative z-10'>
								<FacebookIcon
									sx={{ fontSize: 48 }}
									className='mb-3 text-blue-600'
								/>
								<h5 className='text-lg font-bold mb-2'>Corporativoehecatl</h5>
								<p className='mb-4 text-sm'>
									Síguenos para ver más proyectos y noticias de tecnología
								</p>
								<Link
									href='https://www.facebook.com/corporativoehecatl/'
									target='_blank'
									rel='noopener noreferrer'
									className='bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block'
								>
									Seguir en Facebook
								</Link>
							</div>
						</div>
					</div>

					{/*YOUTUBE */}
					<div className='bg-white rounded-xl shadow-lg p-6'>
						<div className='flex items-center gap-3 mb-6'>
							<YouTubeIcon sx={{ fontSize: 32, color: '#FF0000' }} />
							<div>
								<h4 className='text-xl font-bold text-gray-800'>YouTube</h4>
								<p className='text-gray-600'>Videos y tutoriales</p>
							</div>
						</div>

						{/* CONTENIDO DE YOUTUBE - COMENTADO PARA DESARROLLO FUTURO */}
						{/*
						<div className='space-y-4'>
							<div className='bg-gray-100 rounded-lg h-40 flex items-center justify-center mb-4'>
								<div className='text-center'>
									<YouTubeIcon sx={{ fontSize: 48, color: '#FF0000' }} className='mb-2' />
									<p className='text-gray-600'>Último video</p>
								</div>
							</div>
							<h5 className='font-semibold text-gray-800'>
								Instalación de Sistema Domótico Completo
							</h5>
							<p className='text-gray-600 text-sm'>
								Tutorial paso a paso de cómo instalamos un sistema completo...
							</p>
						</div>
						*/}

						{/* TEMPORAL */}
						<div className='space-y-4'>
							<div className='bg-red-50 border-2 border-dashed border-red-200 rounded-lg h-40 flex items-center justify-center'>
								<div className='text-center'>
									<YouTubeIcon
										sx={{ fontSize: 48, color: '#FF0000' }}
										className='mb-2'
									/>
									<p className='text-gray-600 font-medium'>Canal de YouTube</p>
									<p className='text-gray-500 text-sm'>Próximamente</p>
								</div>
							</div>
							<div className='text-center'>
								<h5 className='font-semibold text-gray-800 mb-2'>
									¡Estamos preparando contenido increíble!
								</h5>
								<p className='text-gray-600 text-sm'>
									Tutoriales, proyectos y todo sobre tecnología y domótica
								</p>
							</div>
						</div>

						<div className='mt-6 text-center'>
							<button
								disabled
								className='inline-flex items-center gap-2 bg-gray-400 text-white px-6 py-3 rounded-lg font-medium cursor-not-allowed'
							>
								<YouTubeIcon />
								Suscribirse (Próximamente)
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* CONTACTO */}
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-12'>
					<h3 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
						ENVÍANOS UN <span style={{ color: COLORS.primary }}>MENSAJE</span>
					</h3>
					<div className='flex justify-center mb-8'>
						<div
							className='w-32 h-1 rounded-full'
							style={{
								background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primary}80)`,
							}}
						></div>
					</div>
				</div>

				<div className='bg-white rounded-xl p-8 shadow-xl'>
					{message && (
						<div
							className={`mb-6 p-4 rounded-lg ${
								message.type === 'success'
									? 'bg-green-100 text-green-800 border border-green-300'
									: 'bg-red-100 text-red-800 border border-red-300'
							}`}
						>
							{message.text}
						</div>
					)}

					<form onSubmit={handleSubmit} className='space-y-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div>
								<label className='block text-gray-700 font-medium mb-2'>
									Nombre *
								</label>
								<input
									type='text'
									name='name'
									value={formData.name}
									onChange={handleInputChange}
									className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent text-gray-800'
									required
									placeholder='Tu nombre completo'
									disabled={isLoading}
								/>
							</div>

							<div>
								<label className='block text-gray-700 font-medium mb-2'>
									Email *
								</label>
								<input
									type='email'
									name='email'
									value={formData.email}
									onChange={handleInputChange}
									className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent text-gray-800'
									placeholder='tu@email.com'
									required
									disabled={isLoading}
								/>
							</div>
						</div>

						<div>
							<label className='block text-gray-700 font-medium mb-2'>
								Teléfono
							</label>
							<input
								type='tel'
								name='phone'
								value={formData.phone}
								onChange={handleInputChange}
								className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent text-gray-800'
								placeholder='(opcional)'
								disabled={isLoading}
							/>
						</div>

						<div>
							<label className='block text-gray-700 font-medium mb-2'>
								Servicio de Interés *
							</label>
							<select
								name='service'
								value={formData.service}
								onChange={handleInputChange}
								className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent text-gray-800'
								required
								disabled={isLoading}
							>
								<option value=''>Selecciona un servicio</option>
								<option value='domotica'>Domótica Residencial</option>
								<option value='telefonia'>Telefonía IP Empresarial</option>
								<option value='redes'>Redes y Infraestructura</option>
								<option value='seguridad'>Videovigilancia y Seguridad</option>
								<option value='automatizacion'>
									Automatización Industrial
								</option>
								<option value='marketing'>Marketing Digital</option>
								<option value='otro'>Otro servicio</option>
							</select>
						</div>

						<div>
							<label className='block text-gray-700 font-medium mb-2'>
								Mensaje *
							</label>
							<textarea
								name='message'
								value={formData.message}
								onChange={handleInputChange}
								className='w-full border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:border-transparent text-gray-800'
								placeholder='Cuéntanos sobre tu consulta...'
								required
								disabled={isLoading}
							></textarea>
						</div>

						<button
							type='submit'
							disabled={isLoading}
							className='w-full text-white py-4 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:scale-[1.02] shadow-lg'
							style={{ backgroundColor: COLORS.primary }}
						>
							{isLoading ? (
								<>
									<svg className='animate-spin h-5 w-5' viewBox='0 0 24 24'>
										<circle
											className='opacity-25'
											cx='12'
											cy='12'
											r='10'
											stroke='currentColor'
											strokeWidth='4'
											fill='none'
										/>
										<path
											className='opacity-75'
											fill='currentColor'
											d='m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
										/>
									</svg>
									Enviando...
								</>
							) : (
								'Enviar Mensaje'
							)}
						</button>
					</form>

					<p className='text-sm text-gray-500 mt-4 text-center'>
						* Campos obligatorios
					</p>
				</div>
			</div>
		</div>
	);
}
