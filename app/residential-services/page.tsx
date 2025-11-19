'use client';
import React from 'react';
import ResidentialHero from '../components/residential/ResidentialHero';
import ResidentialServicesGrid from '../components/residential/ResidentialServicesGrid';
import ResidentialCTA from '../components/residential/ResidentialCTA';

export default function ResidentialServices() {
	return (
		<main className='bg-gray-50 min-h-screen'>
			<ResidentialHero />
			<ResidentialServicesGrid />
			<ResidentialCTA />
		</main>
	);
}
