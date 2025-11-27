import { Metadata } from 'next';
import JardineriaHero from './components/JardineriaHero';
import JardineriaServices from './components/JardineriaServices';
import JardineriaFeatures from './components/JardineriaFeatures';
import JardineriaStats from './components/JardineriaStats';

export const metadata: Metadata = {
	title: 'Servicios de Jardinería Profesional | Corporativo Ehécatl',
	description:
		'Conectamos con los mejores jardineros y paisajistas de tu zona. Diseño, mantenimiento y cuidado de jardines profesional.',
	keywords:
		'jardinería, paisajismo, mantenimiento de jardines, diseño de jardines, jardineros profesionales',
};

export default function JardineriaPage() {
	return (
		<main className='min-h-screen'>
			<JardineriaHero />
			<JardineriaServices />
			<JardineriaFeatures />
			<JardineriaStats />
		</main>
	);
}
