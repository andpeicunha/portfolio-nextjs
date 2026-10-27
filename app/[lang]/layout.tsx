import '../globals.css'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { isLocale, SUPPORTED_LOCALES } from './content'

const descriptions = {
	en: 'Staff Software Engineer and Frontend Architect building platforms across frontend and backend boundaries.',
	pt: 'Staff Software Engineer e Arquiteto Frontend construindo plataformas entre frontend e backend.',
} as const

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
	const { lang } = await params
	if (!isLocale(lang)) return {}

	return {
		alternates: {
			canonical: `/${lang}`,
			languages: { en: '/en', 'pt-BR': '/pt' },
		},
		description: descriptions[lang],
		icons: { icon: '/favicon.ico' },
		metadataBase: new URL('https://portfolio-andrepeixoto.vercel.app'),
		openGraph: {
			description: descriptions[lang],
			locale: lang === 'pt' ? 'pt_BR' : 'en_US',
			title: 'André Peixoto | Staff Software Engineer & Frontend Architect',
			type: 'website',
			url: `/${lang}`,
		},
		title: 'André Peixoto | Staff Software Engineer & Frontend Architect',
		twitter: {
			card: 'summary_large_image',
			description: descriptions[lang],
			title: 'André Peixoto | Staff Software Engineer & Frontend Architect',
		},
	}
}

export function generateStaticParams() {
	return SUPPORTED_LOCALES.map((lang) => ({ lang }))
}

export default async function LocaleLayout({
	children,
	params,
}: LayoutProps<'/[lang]'>) {
	const { lang } = await params

	if (!isLocale(lang)) notFound()

	return (
		<html data-scroll-behavior='smooth' lang={lang === 'pt' ? 'pt-BR' : 'en'}>
			<body>{children}</body>
		</html>
	)
}
