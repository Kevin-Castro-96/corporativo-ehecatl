import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
	try {
		const {
			nombre,
			apellido,
			telefono,
			email,
			password,
			confirmPassword,
			role = 'cliente',
			speciality,
		} = await req.json();

		if (!nombre || !apellido || !telefono || !email || !password)
			return NextResponse.json(
				{ error: 'Todos los campos son obligatorios' },
				{ status: 400 }
			);

		if (password !== confirmPassword)
			return NextResponse.json(
				{ error: 'Las contraseñas no coinciden' },
				{ status: 400 }
			);

		if (role === 'trabajador' && !speciality) {
			return NextResponse.json(
				{ error: 'La especialidad es obligatoria para trabajadores' },
				{ status: 400 }
			);
		}

		const validSpecialities = [
			'plomeria',
			'jardineria',
			'electricista',
			'inmobiliaria',
		];
		if (role === 'trabajador' && !validSpecialities.includes(speciality)) {
			return NextResponse.json(
				{ error: 'Especialidad no válida' },
				{ status: 400 }
			);
		}

		const { data, error: signUpError } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`,
				data: {
					nombre,
					apellido,
					telefono,
				},
			},
		});

		if (signUpError)
			return NextResponse.json({ error: signUpError.message }, { status: 400 });

		if (data.user) {
			const { error: profileError } = await supabaseAdmin
				.from('profiles')
				.insert({
					id: data.user.id,
					nombre,
					apellido,
					telefono,
					email,
					role,
					...(role === 'trabajador' && {
						speciality,
						pay: false,
					}),
				});

			if (profileError) {
				console.error('Error creando perfil:', profileError);
			}
		}

		return NextResponse.json({
			message:
				'Usuario registrado correctamente. Revisa tu email para confirmar la cuenta.',
		});
	} catch (error) {
		return NextResponse.json(
			{ error: 'Error interno al registrar usuario', detalle: String(error) },
			{ status: 500 }
		);
	}
}
