import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
	const cookieStore = await cookies();

	const accessToken = cookieStore.get('sb-access-token')?.value;
	const refreshToken = cookieStore.get('sb-refresh-token')?.value;

	if (!accessToken || !refreshToken) {
		return NextResponse.json({ session: null }, { status: 401 });
	}

	try {
		const { createClient } = await import('@supabase/supabase-js');
		const supabase = createClient(
			process.env.NEXT_PUBLIC_SUPABASE_URL!,
			process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
		);

		const { data, error } = await supabase.auth.getUser(accessToken);

		if (error || !data.user) {
			return NextResponse.json({ session: null }, { status: 401 });
		}

		return NextResponse.json({
			session: {
				user: data.user,
				access_token: accessToken,
			},
		});
	} catch (error) {
		return NextResponse.json({ session: null }, { status: 500 });
	}
}
