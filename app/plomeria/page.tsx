import { Metadata } from 'next';
import PlumberiaHero from './components/PlumberiaHero';
import PlumberiaServices from './components/PlumberiaServices';
import PlumberiaFeatures from './components/PlumberiaFeatures';
import PlumberiaStats from './components/PlumberiaStats';

export const metadata: Metadata = {
	title: 'Servicios de Plomería Profesional | Corporativo Ehécatl',
	description:
		'Servicios profesionales de plomería residencial y comercial. Instalaciones, reparaciones y mantenimiento con garantía.',
	keywords: 'plomería, fontanería, reparaciones, instalaciones, agua, drenaje',
};

export default function PlumberiaPage() {
	return (
		<main className='min-h-screen'>
			<PlumberiaHero />
			<PlumberiaServices />
			<PlumberiaFeatures />
			<PlumberiaStats />
		</main>
	);
}
