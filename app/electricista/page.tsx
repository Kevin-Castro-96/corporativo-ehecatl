import { Metadata } from 'next';
import ElectricistaHero from './components/ElectricistaHero';
import ElectricistaServices from './components/ElectricistaServices';
import ElectricistaFeatures from './components/ElectricistaFeatures';
import ElectricistaStats from './components/ElectricistaStats';

export const metadata: Metadata = {
	title: 'Servicios de Electricistas Profesionales | Corporativo Ehécatl',
	description:
		'Conectamos con los mejores electricistas certificados de tu zona. Instalaciones, reparaciones y mantenimiento eléctrico profesional.',
	keywords:
		'electricista, instalaciones eléctricas, reparaciones eléctricas, electricistas profesionales, servicios eléctricos',
};

export default function ElectricistaPage() {
	return (
		<main className='min-h-screen'>
			<ElectricistaHero />
			<ElectricistaServices />
			<ElectricistaFeatures />
			<ElectricistaStats />
		</main>
	);
}
