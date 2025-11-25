import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const code = searchParams.get('code');

	if (code) {
		try {
			const { data, error } = await supabaseAdmin.auth.exchangeCodeForSession(
				code
			);

			if (error) {
				console.error('Error al confirmar email:', error);
				return NextResponse.redirect(
					new URL('/login?error=confirmation_failed', request.url)
				);
			}

			return NextResponse.redirect(
				new URL('/login?message=email_confirmed', request.url)
			);
		} catch (error) {
			console.error('Error en callback:', error);
			return NextResponse.redirect(
				new URL('/login?error=confirmation_failed', request.url)
			);
		}
	}

	return NextResponse.redirect(new URL('/login', request.url));
}
