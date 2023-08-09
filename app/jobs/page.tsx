'use client'
import React, { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Job } from '../component/jobs'
import TituloPaginas from '../component/tituloPage'

import { JobsList } from './jobsList'
import { reverseOrder } from '../util/inverteOrdem/page'

function SectionPageWork() {
	const controls = useAnimation()
	const [ref, inView] = useInView()
	const Jobs = reverseOrder(JobsList)

	const squareVariants = {
		visible: {
			opacity: 1,
			scale: 1,
			transition: { ease: 'easeOut', duration: 0.6, y: 0 },
		},
		hidden: { opacity: 0, scale: 0.8, y: 100 },
	}

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
				numero='02'
				titulo='Jobs'
			/>

			{Jobs.map((job) => (
				<Job
					key={job.nomeEmpresa}
					nomeEmpresa={job.nomeEmpresa}
					periodo={job.periodo}
					funcao={job.funcao}
					habilidades={job.habilidades}
					descricao={job.descricao}
				/>
			))}
		</motion.div>
	)
}

export default SectionPageWork
