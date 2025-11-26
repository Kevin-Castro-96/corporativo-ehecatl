import { COLORS } from '@/app/constants/colors';

export default function WorkerFooter() {
	return (
		<div className='p-8'>
			<div
				className='text-center p-8 rounded-xl text-white max-w-4xl'
				style={{
					background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})`,
				}}
			>
				<h3 className='text-2xl font-bold mb-4'>
					¡Bienvenido a tu Panel de Trabajador!
				</h3>
				<p className='text-lg opacity-95'>
					Desde aquí podrás gestionar tu perfil profesional y encontrar nuevas
					oportunidades de trabajo.
				</p>
			</div>
		</div>
	);
}
