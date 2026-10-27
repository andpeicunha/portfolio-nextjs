import type { Metadata } from 'next'

import { HerdrCommentPage } from '../../herdr-comment/product-page'

export const metadata: Metadata = {
	alternates: { canonical: '/herdr-comment', languages: { en: '/herdr-comment', 'pt-BR': '/herdr-comment/pt' } },
	description: 'Review AI agent output, add inline comments, and send structured feedback without leaving Herdr.',
	openGraph: { description: 'A keyboard-first Herdr plugin for precise, structured agent feedback.', title: 'Output Comment Composer for Herdr', type: 'website', url: '/herdr-comment' },
	title: 'Output Comment Composer for Herdr',
}

export default function EnglishHerdrCommentPage() {
	return <HerdrCommentPage locale='en' />
}
