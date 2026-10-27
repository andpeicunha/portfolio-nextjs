'use client'

import { useEffect, useState } from 'react'

import styles from './herdr-comment.module.css'
import type { HerdrLocale } from './product-page'

const INSTALL_COMMAND = 'herdr plugin install andpeicunha/herdr-output-comment-composer'

type CopyState = 'idle' | 'copied' | 'error'

export function InstallCommand({ locale }: { locale: HerdrLocale }) {
	const [copyState, setCopyState] = useState<CopyState>('idle')

	useEffect(() => {
		if (copyState === 'idle') return

		const timeout = window.setTimeout(() => setCopyState('idle'), 2200)
		return () => window.clearTimeout(timeout)
	}, [copyState])

	async function copyCommand() {
		try {
			if (navigator.clipboard?.writeText) {
				await navigator.clipboard.writeText(INSTALL_COMMAND)
			} else {
				throw new Error('Clipboard API unavailable')
			}
			setCopyState('copied')
		} catch {
			const fallback = document.createElement('textarea')
			fallback.value = INSTALL_COMMAND
			fallback.setAttribute('readonly', '')
			fallback.style.position = 'fixed'
			fallback.style.opacity = '0'
			document.body.append(fallback)
			fallback.select()
			const copied = document.execCommand('copy')
			fallback.remove()
			setCopyState(copied ? 'copied' : 'error')
		}
	}

	return (
		<div className={styles.commandRow}>
			<code><span>$</span> herdr plugin install<br />andpeicunha/herdr-output-comment-composer</code>
			<button aria-live='polite' onClick={copyCommand} type='button'>
				{copyState === 'copied' ? (locale === 'pt' ? '✓ Copiado!' : '✓ Copied!') : copyState === 'error' ? (locale === 'pt' ? 'Falha ao copiar' : 'Copy failed') : (locale === 'pt' ? 'Copiar comando' : 'Copy command')}
			</button>
		</div>
	)
}
