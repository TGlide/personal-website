import { AnimatedText } from '@components/AnimatedText'
import { motion } from 'framer-motion'

export function Hero() {
	return (
		<div
			className="hero container relative flex h-[880px] flex-col justify-end font-serif"
		>

			<AnimatedText className="text-[15rem] font-black" text="Hi." tag="h1" />
			<AnimatedText
				text="I'm Thomas."
				tag="h2"
				initialDelay={1}
				delay={0.065}
				className="text-[13rem] font-black"
			/>

			<motion.div
				className="absolute right-[200px] top-[180px] w-[360px]
				overflow-hidden rounded-xl"
				initial={{
					clipPath: 'inset(50% 50% 50% 50% round 200px)',
					rotate: 8,
				}}
				animate={{
					clipPath: 'inset(0% 0% 0% 0% round 200px)',
					rotate: -2,
				}}

				transition={{
					delay: 2,
					type: 'spring',
					bounce: 0,
					duration: 0.7,
					delayChildren: 0.3,
					staggerChildren: 0.05,
				}}
			>
				<img src="/images/me.jpg" alt="Thomas's face" />
				{/* Overlay vignette */}
				<div
					className="absolute left-0 top-0 size-full
					bg-[radial-gradient(ellipse_closest-side,_rgba(0,0,0,0.0),_rgba(0,0,0,0.15))]"
				/>
			</motion.div>
		</div>
	)
}
