'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

import styles from './herdr-comment.module.css'
import type { HerdrLocale } from './product-page'

const PHASE_COUNT = 4

const ReviewPhaseContext = createContext(0)

export function ReviewAnimationProvider({ children }: { children: ReactNode }) {
	const [phase, setPhase] = useState(0)

	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
		const interval = window.setInterval(() => setPhase((current) => (current + 1) % PHASE_COUNT), 2200)
		return () => window.clearInterval(interval)
	}, [])

	return <ReviewPhaseContext.Provider value={phase}>{children}</ReviewPhaseContext.Provider>
}

export function useReviewPhase() {
	return useContext(ReviewPhaseContext)
}

const copy = {
	en: { aria: 'Output Comment Composer review pane', block: 'block', comment: 'comment(s)', commentText: 'Validate `payload.userId` before calling the service.', lead: 'The release is almost ready. Review the validation before tagging main.', loaded: 'Loaded 11 blocks from transcript in 0.04s', ready: '✓ Structured feedback ready to send to the agent.' },
	pt: { aria: 'Painel de revisão do Output Comment Composer', block: 'bloco', comment: 'comentário(s)', commentText: 'Valide `payload.userId` antes de chamar o serviço.', lead: 'A versão está quase pronta. Revise a validação antes de criar a tag na main.', loaded: '11 blocos carregados da transcrição em 0,04s', ready: '✓ Feedback estruturado pronto para enviar ao agente.' },
} as const

export function ReviewPane({ locale, phase }: { locale: HerdrLocale; phase: number }) {
	const text = copy[locale]
	const selected = phase >= 1
	const commented = phase >= 2

	return (
		<div className={styles.reviewPane} aria-label={text.aria}>
			<div className={styles.reviewTitle}><span>▰ COMMENTS</span><strong>Output Comment Composer</strong></div>
			<div className={styles.reviewSource}><span>source w2G:p1</span><span>·</span><strong>{commented ? `1 ${text.comment}` : `0 ${text.comment}`}</strong><span>·</span><span>{text.block} {selected ? '8' : '1'}/11</span></div>
			<div className={styles.reviewBody}>
				<p className={styles.reviewLead}><i />{text.lead}</p>
				<div className={styles.reviewCode}>
					<p>— code · typescript —————</p>
					<code><span><b>export async function</b> validate_request(payload) {'{'}</span><span className={selected ? styles.reviewLineSelected : ''}>  const user = await service.find(payload.userId)</span>{commented && <em><small>COMMENT · line 2</small>{text.commentText}</em>}<span>  return user ?? null</span><span>{'}'}</span></code>
				</div>
			</div>
			<div className={`${styles.reviewNotice} ${phase === 3 ? styles.reviewNoticeReady : ''}`}>{phase === 3 ? text.ready : text.loaded}</div>
			<div className={styles.reviewKeys}><span>↑/↓ move</span><span>Space select</span><span>y copy</span><span>c comment</span><span>s send</span><span>q close</span></div>
		</div>
	)
}
