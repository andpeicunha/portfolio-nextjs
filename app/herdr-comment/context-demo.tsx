'use client'

import styles from './herdr-comment.module.css'
import type { HerdrLocale } from './product-page'
import { ReviewPane, useReviewPhase } from './review-pane'

const copy = {
	en: { block: 'Comment on block 08', feedback: 'Structured feedback', ready: 'Ready to send', text: 'Validate `payload.userId` before calling the service.' },
	pt: { block: 'Comentário no bloco 08', feedback: 'Feedback estruturado', ready: 'Pronto para enviar', text: 'Valide `payload.userId` antes de chamar o serviço.' },
} as const

export function ContextDemo({ locale }: { locale: HerdrLocale }) {
	const phase = useReviewPhase()
	const text = copy[locale]

	return (
		<div className={styles.contextDemo} aria-label={locale === 'pt' ? 'Exemplo de comentário com contexto' : 'Contextual comment example'}>
			<ReviewPane locale={locale} phase={phase} />
			<div className={`${styles.contextArrow} ${phase === 3 ? styles.contextArrowActive : ''}`} aria-hidden='true'>→</div>
			<div className={`${styles.contextFeedback} ${phase === 3 ? styles.contextFeedbackActive : ''}`}>
				<div><span>02 / {text.feedback}</span><i>{text.ready}</i></div>
				<small>{text.block}</small>
				<blockquote>&gt; const user = await service.find(payload.userId)</blockquote>
				<p>{text.text}</p>
			</div>
		</div>
	)
}
