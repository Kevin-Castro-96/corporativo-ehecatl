import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

interface RouteParams {
	params: Promise<{ id: string }>;
}

export async function DELETE(request: Request, { params }: RouteParams) {
	try {
		const { id: userId } = await params;

		if (!userId) {
			return NextResponse.json(
				{ success: false, error: 'ID de usuario requerido' },
				{ status: 400 }
			);
		}

		const res = await fetch('/api/auth/session');
		const { session } = await res.json();

		if (!session || session.user.role !== 'admin') {
			return NextResponse.json(
				{ success: false, error: 'Acceso no autorizado' },
				{ status: 403 }
			);
		}

		const { error } = await supabase.from('profiles').delete().eq('id', userId);

		if (error) throw error;

		return NextResponse.json({
			success: true,
			message: 'Usuario eliminado exitosamente',
		});
	} catch (error) {
		console.error('Error eliminando usuario:', error);
		return NextResponse.json(
			{ success: false, error: 'Error interno del servidor' },
			{ status: 500 }
		);
	}
}
