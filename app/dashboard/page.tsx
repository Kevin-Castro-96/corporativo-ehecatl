'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import DashboardCliente from '@/app/components/DashboardCliente';
import DashboardAdmin from '@/app/components/DashboardAdmin';

export default function DashboardPage() {
	const [userRole, setUserRole] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		checkUserRole();
	}, []);

	const checkUserRole = async () => {
		try {
			const res = await fetch('/api/auth/session');
			const { session } = await res.json();

			if (!session) {
				window.location.href = '/login';
				return;
			}

			const { data: profile, error } = await supabase
				.from('profiles')
				.select('role')
				.eq('id', session.user.id)
				.single();

			if (error) throw error;

			setUserRole(profile?.role || 'cliente');
		} catch (error) {
			console.error('Error verificando rol:', error);
			window.location.href = '/login';
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return (
			<div className='flex items-center justify-center min-h-screen'>
				<div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
			</div>
		);
	}

	if (userRole === 'admin') {
		return <DashboardAdmin />;
	}

	return <DashboardCliente />;
}
