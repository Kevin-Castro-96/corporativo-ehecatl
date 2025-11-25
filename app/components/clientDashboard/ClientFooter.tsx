import { COLORS } from '@/app/constants/colors';

export default function ClientFooter() {
	return (
		<div className='p-8'>
			<div
				className='text-center p-8 rounded-xl text-white max-w-4xl'
				style={{
					background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})`,
				}}
			>
				<h3 className='text-2xl font-bold mb-4'>
					¡Bienvenido a tu Panel de Cliente!
				</h3>
				<p className='text-lg opacity-95'>
					Desde aquí podrás gestionar toda tu información y más.
				</p>
			</div>
		</div>
	);
}
