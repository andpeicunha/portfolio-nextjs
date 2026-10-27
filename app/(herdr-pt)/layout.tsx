import '../globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	metadataBase: new URL('https://portfolio-andrepeixoto.vercel.app'),
}

export default function HerdrPortugueseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <html lang='pt-BR'><body>{children}</body></html>
}
