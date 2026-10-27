import { ImageResponse } from 'next/og'

import { isLocale } from './content'

export const alt = 'André Peixoto — Staff Software Engineer and Frontend Architect'
export const contentType = 'image/png'
export const size = { height: 630, width: 1200 }

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }): Promise<ImageResponse> {
	const { lang } = await params
	const isPortuguese = isLocale(lang) && lang === 'pt'

	return new ImageResponse(
		(
			<div
				style={{
					background: '#050607',
					color: '#f4f5ef',
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					justifyContent: 'space-between',
					padding: '72px 80px',
					width: '100%',
				}}
			>
				<div style={{ color: '#b8ff3d', display: 'flex', fontSize: 24, letterSpacing: 4 }}>
					STAFF SOFTWARE ENGINEER · {isPortuguese ? 'ARQUITETO FRONTEND' : 'FRONTEND ARCHITECT'}
				</div>
				<div style={{ display: 'flex', fontSize: 82, fontWeight: 800, letterSpacing: -5, lineHeight: 1, maxWidth: 940 }}>
					{isPortuguese
						? 'Construo bases para times entregarem com autonomia.'
						: 'I build foundations that help teams deliver with autonomy.'}
				</div>
				<div style={{ alignItems: 'center', display: 'flex', fontSize: 28, justifyContent: 'space-between' }}>
					<span>André Peixoto</span>
					<span style={{ color: '#6ee7ff' }}>Frontend · Backend · Platform</span>
				</div>
			</div>
		),
		size,
	)
}
