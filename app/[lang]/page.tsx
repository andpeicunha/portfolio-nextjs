import Link from 'next/link'
import { notFound } from 'next/navigation'

import profileImage from '@/public/photo-andre-github.jpg'

import { content, getProjects, isLocale } from './content'
import { VisualStage } from './visual-stage'

const LINKEDIN_URL = 'https://www.linkedin.com/in/andpeicunha'
const GITHUB_URL = 'https://github.com/andpeicunha'

export default async function PortfolioPage({ params }: PageProps<'/[lang]'>) {
	const { lang } = await params

	if (!isLocale(lang)) notFound()

	const copy = content[lang]
	const projects = getProjects(lang)
	const alternateLocale = lang === 'en' ? 'pt' : 'en'

	return (
		<>
			<div className='page-noise' aria-hidden='true' />
			<a className='skip-link' href='#top'>{lang === 'en' ? 'Skip to content' : 'Pular para o conteúdo'}</a>
			<header className='site-header'>
				<a className='brand' href='#top' aria-label='André Peixoto — home'>
					AP
				</a>
				<nav aria-label='Primary navigation'>
					<a href='#about'>{copy.navigation.about}</a>
					<a href='#experience'>{copy.navigation.experience}</a>
					<a href='#projects'>{copy.navigation.projects}</a>
					<a href='#contact'>{copy.navigation.contact}</a>
				</nav>
				<Link className='language-switch' href={`/${alternateLocale}`}>
					{alternateLocale.toUpperCase()}
				</Link>
			</header>

			<main id='top'>
				<section className='hero section-shell'>
					<div className='hero-copy'>
						<p className='eyebrow'><span>01</span>{copy.hero.role}</p>
						<h1>{copy.hero.title}</h1>
						<p className='hero-body'>{copy.hero.body}</p>
						<div className='actions'>
							<a className='button button-primary' href='#projects'>
								{copy.hero.primaryAction}
							</a>
							<a className='button button-secondary' href={LINKEDIN_URL} rel='noreferrer' target='_blank'>
								{copy.hero.secondaryAction}
							</a>
						</div>
					</div>
					<VisualStage image={profileImage} />
					<div className='scroll-cue' aria-hidden='true'><span /> Scroll</div>
				</section>

				<section className='section-shell content-section' id='about'>
					<p className='eyebrow'><span>02</span>{copy.about.eyebrow}</p>
					<div className='section-grid'>
						<h2>{copy.about.title}</h2>
						<div className='prose'>
							{copy.about.body.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>
					</div>
				</section>

				<section className='section-shell content-section'>
					<p className='eyebrow'><span>03</span>{copy.capabilities.eyebrow}</p>
					<h2>{copy.capabilities.title}</h2>
					<div className='card-grid capabilities-grid'>
						{copy.capabilities.items.map((item, index) => (
							<article className='card' key={item.title}>
								<span className='card-index'>0{index + 1}</span>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</article>
						))}
					</div>
				</section>

				<section className='section-shell content-section' id='experience'>
					<p className='eyebrow'><span>04</span>{copy.experience.eyebrow}</p>
					<h2>{copy.experience.title}</h2>
					<div className='experience-list'>
						{copy.experience.items.map((item) => (
							<article className='experience-item' key={item.company}>
								<div>
									<p className='period'>{item.period}</p>
									<h3>{item.company}</h3>
									<p className='role'>{item.role}</p>
								</div>
								<p>{item.description}</p>
							</article>
						))}
					</div>
				</section>

				<section className='section-shell content-section' id='projects'>
					<p className='eyebrow'><span>05</span>{copy.projects.eyebrow}</p>
					<h2>{copy.projects.title}</h2>
					<div className='card-grid projects-grid'>
						{projects.map((project, index) => (
							<a className='card project-card' href={project.href} key={project.name} rel='noreferrer' target='_blank'>
								<div className='project-meta'>
									<span>0{index + 1} / {project.stack}</span>
									<span aria-hidden='true'>↗</span>
								</div>
								<h3>{project.name}</h3>
								<p className='project-summary'>{project.description}</p>
								<div className='project-detail'>
									<span>{copy.projects.labels.problem}</span>
									<p>{project.problem}</p>
								</div>
								<div className='project-proof'>
									<span>{copy.projects.labels.approach}</span>
									<ul>
										{project.proof.map((item) => <li key={item}>{item}</li>)}
									</ul>
								</div>
							</a>
						))}
					</div>
				</section>

				<section className='section-shell contact-section' id='contact'>
					<p className='eyebrow'><span>06</span>{copy.contact.eyebrow}</p>
					<h2>{copy.contact.title}</h2>
					<p>{copy.contact.body}</p>
					<div className='actions'>
						<a className='button button-primary' href={LINKEDIN_URL} rel='noreferrer' target='_blank'>LinkedIn</a>
						<a className='button button-secondary' href={GITHUB_URL} rel='noreferrer' target='_blank'>GitHub</a>
					</div>
				</section>
			</main>

			<footer className='site-footer section-shell'>
				<span>André Peixoto</span>
				<span>São Paulo, Brazil</span>
			</footer>
		</>
	)
}
