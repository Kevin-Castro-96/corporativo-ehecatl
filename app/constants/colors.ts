export const COLORS = {
	primary: '#c41e3a', // Rojo metálico principal
	primaryDark: '#a01729', // Rojo metálico oscuro
	primaryLight: '#d63447', // Rojo metálico claro

	secondary: '#1e293b', // Gris tech oscuro
	accent: '#0f172a', // Negro tech
	techBlue: '#0ea5e9', // Azul tecnológico

	white: '#ffffff',
	black: '#000000',

	gray: {
		50: '#f8fafc',
		100: '#f1f5f9',
		200: '#e2e8f0',
		300: '#cbd5e1',
		400: '#94a3b8',
		500: '#64748b',
		600: '#475569',
		700: '#334155',
		800: '#1e293b',
		900: '#0f172a',
	},

	success: '#10b981',
	warning: '#f59e0b',
	error: '#ef4444',
	info: '#3b82f6',

	lightRed: '#fef2f2',
	lightBlue: '#eff6ff',
	darkOverlay: 'rgba(0, 0, 0, 0.7)',
} as const;

export const GRADIENTS = {
	primary: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
	tech: `linear-gradient(135deg, ${COLORS.secondary} 0%, ${COLORS.accent} 100%)`,
	hero: `linear-gradient(135deg, ${COLORS.primary}95 0%, ${COLORS.secondary}95 100%)`,
} as const;
