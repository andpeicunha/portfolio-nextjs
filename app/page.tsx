//NAVEGAÇÃO
'use client'
import React, { useState, useEffect } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import {
	LinkedinLogo,
	IconHTML5,
	IconCSS3,
	IconTS,
	IconJava,
	IconGit,
	IconReact,
	IconTailwind,
	IconFigma,
	IconAdobe,
} from '../public/logotipo'
import Nav from './navigator/page'
import SectionPageAbout from './about/page'
import SectionPageWork from './jobs/page'
import Blog from './blog/page'
import Image from 'next/image'
import MaoBalancando from '../public/victory-hand.png'

export default function Home() {
	const [mostraLogoLinkedin, setMostraLogoLinkedin] = useState(false)
	const [hidden, setHidden] = useState(false)

	const iconsVariants: Variants = {
		animate: {
			x: 0,
			opacity: 1,
		},
		transition: {},
		initial: { opacity: 0 },
		exit: { opacity: 0 },
	}

	function handleScroll() {
		if (window.pageYOffset > 50) {
			setHidden(true)
		} else {
			setHidden(false)
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<div
				id='img-home-1'
				className='fixed -z-40 bg-black opacity-20 bg-clip-content bg-cover bg-center bg-fixed w-full h-full'
			></div>

			<AnimatePresence>
				{/* Not Hidden */}
				{!hidden && (
					<motion.div
						className='div-navigation'
						initial={{ opacity: 1, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						exit={{ opacity: 0 }}
					>
						<Nav />
					</motion.div>
				)}
			</AnimatePresence>

			<motion.div
				initial={{
					opacity: 0,
					x: -100,
					scale: 1,
				}}
				animate={{ opacity: 1, x: 0, scale: 1 }}
				transition={{ delay: 0.5, duration: 0.3 }}
			>
				<div
					id='LogosTecnologias'
					className='fixed pt-[6rem] top-0 flex-col h-screen 
        w-[40px] left-[5%] md:left-[4%] lg:left-[1.9rem]'
				>
					<div className='icon-home-tecs'>
						<IconHTML5
							classNameSvg='icon-home-svg'
							width={0}
							UrlPage={''}
							texto={'HTML5'}
						/>
					</div>
					<div className='icon-home-tecs'>
						<IconCSS3
							classNameSvg='icon-home-svg'
							width={0}
							UrlPage={''}
							texto={'CSS3'}
						/>
					</div>
					<div className='icon-home-tecs'>
						<IconTailwind
							classNameSvg='icon-home-svg'
							width={0}
							UrlPage={''}
							texto={'Tailwind'}
						/>
					</div>
					<div className='icon-home-tecs'>
						<IconJava
							classNameSvg='icon-home-svg'
							width={0}
							UrlPage={''}
							texto={'ES6+'}
						/>
					</div>
					<div className='icon-home-tecs'>
						<IconTS
							classNameSvg='icon-home-svg'
							width={0}
							UrlPage={''}
							texto={'Typescript'}
						/>
					</div>
					<div className='icon-home-tecs'>
						<IconReact
							classNameSvg='icon-home-svg'
							width={0}
							UrlPage={''}
							texto={'ReactJS'}
						/>
					</div>
					<div className='icon-home-tecs'>
						<IconGit
							classNameSvg='icon-home-svg'
							width={0}
							UrlPage={''}
							texto={'Git'}
						/>
					</div>
					<div className='icon-home-tecs'>
						<IconFigma
							classNameSvg='icon-home-svg'
							width={0}
							UrlPage={''}
							texto={'Figma'}
						/>
					</div>
					<div className='icon-home-tecs'>
						<IconAdobe
							classNameSvg='icon-home-svg'
							width={0}
							UrlPage={''}
							texto={'Adobe Cloud (Photoshop, Illustrator, Premiere)'}
						/>
					</div>
					<div
						id='Linha'
						className='ml-[50%] mt-5 h-full w-[1px] bg-white/50'
					></div>
				</div>
			</motion.div>

			<section
				id='page1'
				className='section-page-1'
			>
				<div className='flex-col titulo-0 pl-0 -mb-3'>
					<div className=''>Olá!</div>
					<div
						className='relative w-[24px] md:w-[27px]  aspect-square
          top-[-23px] md:top-[-32px] left-[28px] md:left-[45px] bg-cover'
					>
						<Image
							src={MaoBalancando}
							height={24}
							width={24}
							alt='mão da vitória'
						/>
					</div>
					<div className='relative mt-[-25px] md:text-[1.1rem]'>Eu sou o </div>
				</div>

				<div className='flex flex-row mt-1'>
					<div>
						<a
							href='https://www.linkedin.com/in/andpeicunha'
							onMouseEnter={() => setMostraLogoLinkedin(true)}
							onMouseLeave={() => setMostraLogoLinkedin(false)}
							className='titulo-3 text-verde-ti-vivo font-bold cursor-pointer'
						>
							André Peixoto,
						</a>
					</div>
					{mostraLogoLinkedin && (
						<motion.div variants={iconsVariants}>
							<LinkedinLogo
								className=''
								classNameSvg='h-[15px]'
								width={15}
								UrlPage={'https://www.linkedin.com/in/andpeicunha'}
							/>
						</motion.div>
					)}
				</div>
				<div className='flex titulo-2 mt-2 text-[gray]-300/60 hover:blur-none items-baseline'>
					Um apaixonado Front-End Developer
				</div>

				<h1
					className='text-1xl mt-8 text-gray-200/70 pr-0 
        sm:pr-[7rem] lg:pr-[20rem] xl:text-[1.3rem]'
				>
					Adoro{' '}
					<span className='text-verde-ti-vivo'>
						criar experiências inovadoras
					</span>{' '}
					na web.
					<p />
					São <span>mais de 10 anos</span> em desenvolvimento Front-End e cerca
					de 4 anos com ReactJs, NextJs e Typescript.
					<p />
					Pai de 3 meninos, apaixonado por fotografia, design e{' '}
					<span>novas tecnologias</span> Front-End.
				</h1>
				<div className='fixed top-0 right-0 bg-white/50 w-[5rem] h-[5rem] invisible'>
					Ultimo Artigo
				</div>
			</section>

			<SectionPageAbout />
			<SectionPageWork />
			<Blog />
		</>
	)
}
