import type { Metadata } from 'next'

import { HerdrCommentPage } from '../../../herdr-comment/product-page'

export const metadata: Metadata = {
	alternates: { canonical: '/herdr-comment/pt', languages: { en: '/herdr-comment', 'pt-BR': '/herdr-comment/pt' } },
	description: 'Revise saídas de agentes de IA, adicione comentários inline e envie feedback estruturado sem sair do Herdr.',
	openGraph: { description: 'Um plugin Herdr focado no teclado para feedback preciso e estruturado a agentes.', locale: 'pt_BR', title: 'Output Comment Composer para Herdr', url: '/herdr-comment/pt' },
	title: 'Output Comment Composer para Herdr',
}

export default function PortugueseHerdrCommentPage() {
	return <HerdrCommentPage locale='pt' />
}
