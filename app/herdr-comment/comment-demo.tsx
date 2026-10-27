'use client'

import styles from './herdr-comment.module.css'
import type { HerdrLocale } from './product-page'
import { ReviewPane, useReviewPhase } from './review-pane'

export function CommentDemo({ locale }: { locale: HerdrLocale }) {
	const phase = useReviewPhase()

	return (
		<div className={`${styles.demoShell} ${styles.herdrMock}`}>
			<aside className={styles.mockSidebar}>
				<div><small>spaces</small><strong><i className={styles.workingDot} />herdr</strong><span>master</span></div>
				<div><small>agents</small><strong><i className={styles.workingDot} />review</strong><span>working · codex</span><strong><i className={styles.idleDot} />explore</strong><span>idle · claude</span></div>
			</aside>
			<section className={styles.mockMain}>
				<div className={styles.mockTabs}><span>codex</span><strong>comments</strong><span>+</span></div>
				<ReviewPane locale={locale} phase={phase} />
			</section>
		</div>
	)
}
