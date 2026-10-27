'use client'

import { Float, QuadraticBezierLine, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import type { Group } from 'three'

type Point = [number, number, number]

const CONNECTIONS: Array<{ end: Point; mid: Point }> = [
	{ end: [2.8, 1.55, -1], mid: [1.4, 2.15, -0.35] },
	{ end: [3.25, -1.25, -0.6], mid: [1.7, -2, 0] },
	{ end: [-2.9, -1.7, -1.2], mid: [-1.4, -2.4, -0.25] },
]

function ArchitectureScene({ reducedMotion }: { reducedMotion: boolean }) {
	const groupRef = useRef<Group>(null)

	useFrame(({ pointer }, delta) => {
		const group = groupRef.current
		if (!group || reducedMotion) return

		group.rotation.y += (pointer.x * 0.13 - group.rotation.y) * delta * 2.4
		group.rotation.x += (pointer.y * -0.09 - group.rotation.x) * delta * 2.4
		group.position.x += (pointer.x * 0.16 - group.position.x) * delta * 1.8
	})

	return (
		<group ref={groupRef}>
			<mesh position={[-2.9, 1.9, -2.1]} rotation={[0.18, -0.25, -0.1]}>
				<planeGeometry args={[3.6, 2.1]} />
				<meshBasicMaterial color='#6ee7ff' opacity={0.055} transparent />
			</mesh>
			<mesh position={[2.65, -1.7, -2.35]} rotation={[-0.2, 0.3, 0.12]}>
				<planeGeometry args={[4.2, 2.6]} />
				<meshBasicMaterial color='#b8ff3d' opacity={0.05} transparent />
			</mesh>

			<Float enabled={!reducedMotion} floatIntensity={0.55} rotationIntensity={0.25} speed={1.2}>
				<mesh position={[0, 0, 0.15]}>
					<icosahedronGeometry args={[0.34, 1]} />
					<meshStandardMaterial color='#b8ff3d' emissive='#b8ff3d' emissiveIntensity={1.8} roughness={0.3} />
				</mesh>
				{CONNECTIONS.map(({ end, mid }) => (
					<QuadraticBezierLine
						color='#b8ff3d'
						end={end}
						key={end.join('-')}
						lineWidth={1.15}
						mid={mid}
						opacity={0.48}
						start={[0, 0, 0]}
						transparent
					/>
				))}
				{CONNECTIONS.map(({ end }, index) => (
					<mesh key={`node-${end.join('-')}`} position={end}>
						<sphereGeometry args={[index === 0 ? 0.23 : 0.16, 18, 18]} />
						<meshStandardMaterial
							color={index === 1 ? '#6ee7ff' : '#f4f5ef'}
							emissive={index === 1 ? '#6ee7ff' : '#b8ff3d'}
							emissiveIntensity={1.4}
						/>
					</mesh>
				))}
			</Float>

			<Sparkles color='#b8ff3d' count={22} opacity={0.48} scale={[7, 5, 3]} size={1.5} speed={reducedMotion ? 0 : 0.22} />
		</group>
	)
}

export function HeroScene() {
	const reducedMotion = useReducedMotion() ?? false

	return (
		<div aria-hidden='true' className='hero-scene'>
			<Canvas
				camera={{ position: [0, 0, 8], fov: 48 }}
				dpr={[1, 1.5]}
				frameloop={reducedMotion ? 'demand' : 'always'}
				gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
			>
				<ambientLight intensity={1.1} />
				<pointLight color='#b8ff3d' intensity={18} position={[2, 2, 4]} />
				<pointLight color='#6ee7ff' intensity={12} position={[-3, -1, 3]} />
				<ArchitectureScene reducedMotion={reducedMotion} />
			</Canvas>
		</div>
	)
}
