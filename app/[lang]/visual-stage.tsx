'use client'

import Image, { type StaticImageData } from 'next/image'
import dynamic from 'next/dynamic'
import { useRef } from 'react'

const HeroScene = dynamic(
	() => import('./hero-scene').then((module) => module.HeroScene),
	{ ssr: false },
)

type VisualStageProps = {
	image: StaticImageData
}

export function VisualStage({ image }: VisualStageProps) {
	const stageRef = useRef<HTMLDivElement>(null)

	function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
		const stage = stageRef.current
		if (!stage) return

		const bounds = stage.getBoundingClientRect()
		const x = (event.clientX - bounds.left) / bounds.width - 0.5
		const y = (event.clientY - bounds.top) / bounds.height - 0.5

		stage.style.setProperty('--rotate-x', `${y * -9}deg`)
		stage.style.setProperty('--rotate-y', `${x * 12}deg`)
		stage.style.setProperty('--pointer-x', `${(x + 0.5) * 100}%`)
		stage.style.setProperty('--pointer-y', `${(y + 0.5) * 100}%`)
	}

	function resetStage() {
		const stage = stageRef.current
		if (!stage) return

		stage.style.setProperty('--rotate-x', '0deg')
		stage.style.setProperty('--rotate-y', '0deg')
		stage.style.setProperty('--pointer-x', '50%')
		stage.style.setProperty('--pointer-y', '50%')
	}

	return (
		<div
			className='visual-stage'
			onPointerLeave={resetStage}
			onPointerMove={handlePointerMove}
			ref={stageRef}
		>
			<HeroScene />
			<div className='depth-panel depth-panel-back' aria-hidden='true' />
			<div className='depth-panel depth-panel-front' aria-hidden='true'>
				<span>const platform =</span>
				<strong>build(system)</strong>
			</div>
			<div className='portrait-card'>
				<Image
					alt='André Peixoto'
					priority
					sizes='(max-width: 800px) 78vw, 430px'
					src={image}
				/>
				<div className='portrait-shine' aria-hidden='true' />
				<div className='portrait-label'>
					<span className='status-dot' />
					São Paulo · BR
				</div>
				<div className='portrait-code' aria-hidden='true'>
					<span>const architect = platform</span>
					<span>frontend.connect(api)</span>
					<span>identity.verify(access)</span>
					<span>pipeline.ship(quality)</span>
					<span>teams.enable(autonomy)</span>
					<span>system.observe(change)</span>
					<span>contracts.align(boundaries)</span>
				</div>
			</div>
			<div className='floating-chip chip-architecture'>Architecture</div>
			<div className='floating-chip chip-systems'>Systems</div>
			<div className='floating-code' aria-hidden='true'>
				<span>01</span>
				<strong>build</strong>
				<small>across boundaries</small>
			</div>
		</div>
	)
}
