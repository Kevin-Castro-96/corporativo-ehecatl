'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
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
		<div className='w-full min-h-screen flex justify-center items-center px-4 py-10 bg-gray-50'>
			<div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 p-4'>
				<div className='flex flex-col justify-center'>

					<div className='mb-8'>
						<h2 className='text-2xl font-bold mb-4 text-gray-800'>
							Corporativo Ehécatl
						</h2>
						<p className='text-gray-600 mb-6 leading-relaxed text-lg'>
							No dudes en ponerte en contacto con nosotros; estaremos encantados
							de atenderte.
						</p>
						<p
							className='text-xl font-semibold mb-8'
							style={{ color: COLORS.primary }}
						>
							¡Contáctanos!
						</p>
					</div>

					<div className='space-y-4 mb-8'>
						<div className='flex items-center gap-4'>
							<div
								className='w-12 h-12 rounded-full flex items-center justify-center'
								style={{ backgroundColor: `${COLORS.primary}15` }}
							>
								<PhoneIcon style={{ color: COLORS.primary }} />
							</div>
							<div>
								<h4 className='font-semibold text-gray-800'>Teléfono</h4>
								<p className='text-gray-600'>771 771 604 0985</p>
							</div>
						</div>

						<div className='flex items-center gap-4'>
							<div
								className='w-12 h-12 rounded-full flex items-center justify-center'
								style={{ backgroundColor: `${COLORS.primary}15` }}
							>
								<EmailIcon style={{ color: COLORS.primary }} />
							</div>
							<div>
								<h4 className='font-semibold text-gray-800'>
									Correo Electrónico
								</h4>
								<p className='text-gray-600'>
									contacto@corporativoehecatl.com.mx
								</p>
							</div>
						</div>

						<div className='flex items-center gap-4'>
							<div
								className='w-12 h-12 rounded-full flex items-center justify-center'
								style={{ backgroundColor: `${COLORS.primary}15` }}
							>
								<LocationOnIcon style={{ color: COLORS.primary }} />
							</div>
							<div>
								<h4 className='font-semibold text-gray-800'>Ubicación</h4>
								<p className='text-gray-600'>Pachuca, Hidalgo, México</p>
							</div>
						</div>
					</div>

					<div className='mb-6'>
						<h3 className='text-lg font-semibold text-gray-800 mb-4'>
							Visita nuestras redes sociales y conoce más de lo que hacemos
						</h3>
						<Link
							href='https://www.facebook.com/corporativoehecatl/'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all transform hover:scale-[1.02] shadow-lg'
						>
							<FacebookIcon fontSize='medium' />
							Síguenos en Facebook
						</Link>
					</div>

					<div className='bg-white p-6 rounded-xl shadow-md'>
						<h4 className='font-semibold text-gray-800 mb-3'>
							Horarios de Atención
						</h4>
						<div className='text-gray-600 space-y-1'>
							<p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
							<p>Sábado: 9:00 AM - 12:00 PM</p>
						</div>
					</div>
				</div>

				<div className='bg-white rounded-xl p-8 shadow-xl'>
					<h3 className='text-2xl font-bold mb-6 text-gray-800'>Contáctanos</h3>

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

					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
								<label className='block text-gray-700 font-medium mb-2'>
									Nombre *
								</label>
								<input
									type='text'
									name='name'
									value={formData.name}
									onChange={handleInputChange}
									className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-800'
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
									className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-800'
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
								className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-800'
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
								className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-800'
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
								className='w-full border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-800'
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
