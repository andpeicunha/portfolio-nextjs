'use client'
import React, { useEffect } from 'react'
import { useAnimation, motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Job } from '../component/jobs'
import TituloPaginas from '../component/tituloPage'

function SectionPageWork(props: { params?: any; searchParams?: any }) {
	const squareVariants = {
		visible: {
			opacity: 1,
			scale: 1,
			transition: { ease: 'easeOut', duration: 0.6, y: 0 },
		},
		hidden: { opacity: 0, scale: 0.8, y: 100 },
	}

	const controls = useAnimation()
	const [ref, inView] = useInView()
	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])
	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={squareVariants}
			className='section-pages
      md:grid md:grid-cols-2'
		>
			<TituloPaginas
				id='SECTION 2 - WORK'
				numero='02'
				titulo='Jobs'
			/>

			<Job
				nomeEmpresa='Trinca'
				periodo='2023 (Atual)'
				funcao='Front-End Developer'
				habilidades={[
					'React',
					'NextJs',
					'Tailwind',
					'Typescript ',
					'API Rest',
					'Axios',
				]}
				descricao=''
			/>
			<Job
				nomeEmpresa='Doce Affetto'
				periodo='2015 a 2022'
				funcao='Front-End Developer'
				habilidades={[
					'React',
					'NextJs',
					'Design UI/UX',
					'HTML',
					'CSS | SCSS | Tailwind',
					'ES6+ | Typescript ',
					'API Rest',
					'Photoshop | Figma',
					'MongoDB | Firebase',
					'MySQL',
				]}
				descricao='
        Responsável pelo <span>design, criação e manutenção</span> do site e das páginas de lançamento (landing pages), em <span>React e NextJs</span>, com foco também em SEO. 
        <br><br>Criação de estratégias de automação de rotinas com <span>API Rest</span> e integração a sistemas externos (Make).
        <br><br>Gestão de anúncios no Meta Ads e Google Ads e metodologia PDCA na criação de produtos.'
			/>
			<Job
				nomeEmpresa='Estec Tecnologia'
				periodo='2011 a 2014'
				funcao='Front-End Developer'
				descricao='Fui convidado como sócio pra desenvolver uma nova linha de produtos SaaS. <p/>
        A Estec já tinha uma sólida trajetória e know-how em sistemas para digitalização de documentos em grande escala (BPM), 
        especialmente em projetos governamentais, mas queria abrir uma nova linha de podutos para as PMEs. 
        <p/>
        Fui responsável por colaborar no desenvolvimento de novos produtos para digitalização, automação de processos e 
        gestão de documentos (BPM), especialmente em áreas como RH e Contábil.
        <p/>
        Também era responsável pelo desenvolvimento dos sites e Design UI/UX nessa nova linha de produtos.'
				habilidades={[
					'HTML',
					'CSS | JQuery',
					'Javascript',
					'Design UX/UI',
					'Photoshop',
					'Adobe Cloud',
				]}
			/>
			<Job
				nomeEmpresa='Grupo Store'
				periodo='2002 à 2008'
				funcao='Front-End Developer'
				descricao='De início era responsável pela manutenção e criação dos sites das cinco empresas do Grupo.<p/> 
        Também era responsável pelo Design UI dos sistemas legados, inicilamente eram todos desktop em VB.<p/> 
        Quando iniciamos a migração dos sistemas pra web, especialmente pra uso dos clientes, eu cuidava do Front-End e também Design UI.'
				habilidades={[
					'CSS',
					'HTML',
					'Javascript',
					'Photoshop',
					'JQuery',
					'Design UX/UI',
					'Kanban',
					'PMO',
					'Scrum',
				]}
				funcao1='Project Manager'
				periodo1='2008 a 2010'
				descricao1='Devido ao tamanho de alguns projetos a empresa teve a iniciativa de criar um time de Projetos e fui convidado a gerenciar e coordenar essa fase.<p/>'
			/>
			<Job
				nomeEmpresa='Base Brasil'
				periodo='1998 a 2002'
				funcao='Web Designer'
				descricao="Esse foi minha <span>primeira experiência profissional com a internet</span>. 
        Inicialmente era responsável pelo tratamento de imagens para sites em diversos projetos e clientes. 
        <p/>Com cerca de 6 meses começei a <span>desenvolver para <b>Front-End</b></span>, 
        mas na época apenas com HTML e Javascript - <i class='font-serif'>acredite, o CSS mal era compatível com o IE.</i>"
				habilidades={['HTML', 'Javascript', 'Photoshop', 'Corel Draw']}
			/>
		</motion.div>
	)
}

export default SectionPageWork
