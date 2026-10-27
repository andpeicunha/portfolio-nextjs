import Link from 'next/link'

import { CommentDemo } from './comment-demo'
import { ContextDemo } from './context-demo'
import styles from './herdr-comment.module.css'
import { InstallCommand } from './install-command'
import { ReviewAnimationProvider } from './review-pane'

const GITHUB_URL = 'https://github.com/andpeicunha/herdr-output-comment-composer'
const HERDR_URL = 'https://herdr.dev/'

export type HerdrLocale = 'en' | 'pt'

const content = {
	en: {
		actions: ['Install plugin', 'View source'], builtBy: 'Built by André Peixoto',
		features: [['Semantic, not raw', 'Markdown becomes clear review blocks. Context stays attached to every note.'], ['Built for the keyboard', 'Navigate, select, copy, comment, and send without leaving the terminal.'], ['Agent-aware', 'Reads Codex and Claude JSONL transcripts, with a Herdr pane fallback.'], ['Local by default', 'Built with Python curses. No package install and no external API call.']],
		featuresHeading: ['03 / BUILT FOR REVIEW', 'Terminal speed.', 'Review precision.'],
		hero: { intro: 'Precise feedback, directly in your agent’s output.', kicker: 'Keyboard-first review', title: 'Review, comment, and send.', titleAccent: 'All within Herdr.' },
		install: ['04 / INSTALL', 'One command.', 'Stay in flow.', 'Install the plugin, open a Herdr agent pane, and review the output where the work already happens.', 'Read the documentation'],
		nav: ['How it works', 'Features', 'Install'], proof: ['Codex', 'Claude', 'Any Herdr pane', 'No external API'], skip: 'Skip to content',
		statement: ['Long output needs more than', '“change this.”', 'Keep feedback close to the exact block that needs work.'],
		workflow: [['Read', 'Open the active agent transcript or read the current Herdr pane.'], ['Select', 'Move through headings, lists, tables, quotes, tools, and code as real blocks.'], ['Comment', 'Attach precise, multiline notes to the part that needs a change.'], ['Send', 'Return every note to the source agent as one structured prompt.']],
		workflowHeading: ['02 / WORKFLOW', 'From output to action.', 'One clear loop.'],
	},
	pt: {
		actions: ['Instalar plugin', 'Ver código'], builtBy: 'Criado por André Peixoto',
		features: [['Semântico, não bruto', 'O Markdown vira blocos claros de revisão. O contexto permanece ligado a cada comentário.'], ['Feito para o teclado', 'Navegue, selecione, copie, comente e envie sem sair do terminal.'], ['Consciente do agente', 'Lê transcrições JSONL do Codex e Claude, com fallback para o painel do Herdr.'], ['Local por padrão', 'Criado com Python curses. Sem instalar pacotes e sem chamadas para APIs externas.']],
		featuresHeading: ['03 / FEITO PARA REVISAR', 'Velocidade do terminal.', 'Precisão na revisão.'],
		hero: { intro: 'Feedback preciso, direto no output do seu agente.', kicker: 'Revisão pelo teclado', title: 'Revise, comente e envie.', titleAccent: 'Tudo no Herdr.' },
		install: ['04 / INSTALAÇÃO', 'Um comando.', 'Mantenha o fluxo.', 'Instale o plugin, abra o painel de um agente no Herdr e revise a saída onde o trabalho já acontece.', 'Ler a documentação'],
		nav: ['Como funciona', 'Recursos', 'Instalar'], proof: ['Codex', 'Claude', 'Qualquer painel Herdr', 'Sem API externa'], skip: 'Pular para o conteúdo',
		statement: ['Saídas longas precisam de mais do que', '“mude isso.”', 'Mantenha o feedback perto do bloco exato que precisa de ajuste.'],
		workflow: [['Leia', 'Abra a transcrição do agente ativo ou leia o painel atual do Herdr.'], ['Selecione', 'Navegue por títulos, listas, tabelas, citações, ferramentas e código como blocos reais.'], ['Comente', 'Adicione notas precisas e multilinha à parte que precisa de mudança.'], ['Envie', 'Retorne todos os comentários ao agente de origem em um único prompt estruturado.']],
		workflowHeading: ['02 / FLUXO', 'Da saída para a ação.', 'Um fluxo claro.'],
	},
} as const

export function HerdrCommentPage({ locale }: { locale: HerdrLocale }) {
	const copy = content[locale]
	const isPortuguese = locale === 'pt'
	return (
		<div className={styles.productPage}>
			<a className='skip-link' href='#main'>{copy.skip}</a><div className='page-noise' aria-hidden='true' />
			<header className={styles.header}>
				<a className={styles.productBrand} href='#top' aria-label='Output Comment Composer home'><span className={styles.mark}>&gt;_</span><span>HERDR / <strong>COMMENTS</strong></span></a>
				<nav aria-label={isPortuguese ? 'Navegação principal' : 'Main navigation'}><a href='#workflow'>{copy.nav[0]}</a><a href='#features'>{copy.nav[1]}</a><a href='#install'>{copy.nav[2]}</a></nav>
				<div className={styles.headerActions}><Link className={styles.languageLink} href={isPortuguese ? '/herdr-comment' : '/herdr-comment/pt'}>{isPortuguese ? 'EN' : 'PT-BR'}</Link><a className={styles.headerLink} href={GITHUB_URL} rel='noreferrer' target='_blank'>GitHub ↗</a></div>
			</header>
			<main id='main'>
				<ReviewAnimationProvider>
					<section className={styles.hero} id='top'><div className={styles.heroCopy}><p className={styles.kicker}><span>HERDR PLUGIN / 01</span> {copy.hero.kicker}</p><h1>{copy.hero.title} <em>{copy.hero.titleAccent}</em></h1><p className={styles.intro}>{copy.hero.intro}</p><div className={styles.actions}><a className={styles.primaryAction} href='#install'>{copy.actions[0]} <span>↓</span></a><a className={styles.secondaryAction} href={GITHUB_URL} rel='noreferrer' target='_blank'>{copy.actions[1]} ↗</a></div><div className={styles.proofLine}>{copy.proof.map((item) => <span key={item}>{item}</span>)}</div></div><div className={styles.heroDemo}><div className={styles.demoGlow} aria-hidden='true' /><CommentDemo locale={locale} /></div></section>
					<section className={styles.statement}><p>{copy.statement[0]} <span>{copy.statement[1]}</span></p><h2>{copy.statement[2]}</h2><ContextDemo locale={locale} /></section>
				</ReviewAnimationProvider>
				<section className={styles.section} id='workflow'><div className={styles.sectionHeading}><p>{copy.workflowHeading[0]}</p><h2>{copy.workflowHeading[1]}<br />{copy.workflowHeading[2]}</h2></div><div className={styles.workflowGrid}>{copy.workflow.map(([label, detail], index) => <article key={label}><span>0{index + 1}</span><h3>{label}</h3><p>{detail}</p></article>)}</div></section>
				<section className={styles.section} id='features'><div className={styles.sectionHeading}><p>{copy.featuresHeading[0]}</p><h2>{copy.featuresHeading[1]}<br />{copy.featuresHeading[2]}</h2></div><div className={styles.featureGrid}>{copy.features.map(([title, detail], index) => <article key={title}><div><span>0{index + 1}</span><i aria-hidden='true' /></div><h3>{title}</h3><p>{detail}</p></article>)}</div></section>
				<section className={styles.installSection} id='install'><div><p>{copy.install[0]}</p><h2>{copy.install[1]}<br />{copy.install[2]}</h2><p className={styles.installText}>{copy.install[3]}</p></div><div className={styles.installTerminal}><div><span>terminal</span><i>● ready</i></div><InstallCommand locale={locale} /><a href={GITHUB_URL} rel='noreferrer' target='_blank'>{copy.install[4]} ↗</a></div></section>
			</main>
			<footer className={styles.footer}><div><span className={styles.mark}>&gt;_</span> Output Comment Composer</div><div><a href={HERDR_URL} rel='noreferrer' target='_blank'>Herdr ↗</a><a href={GITHUB_URL} rel='noreferrer' target='_blank'>GitHub ↗</a></div><span>{copy.builtBy}</span></footer>
		</div>
	)
}

export default function EnglishHerdrCommentPage() { return <HerdrCommentPage locale='en' /> }
