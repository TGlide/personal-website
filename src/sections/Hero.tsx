import { AnimatedText } from '@components/AnimatedText'
import { motion } from 'framer-motion'

export function Hero() {
	return (
		<div
			className="hero h-screen relative flex flex-col justify-end container font-serif"
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
				className="absolute w-[360px] top-[180px] right-[200px]
				rounded-xl overflow-hidden"
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
				<img src="/me.jpg" alt="Thomas's face" />
				{/* Overlay vignette */}
				<div
					className="absolute top-0 left-0 w-full h-full
					bg-[radial-gradient(ellipse_closest-side,_rgba(0,0,0,0.0),_rgba(0,0,0,0.15))]"
				/>
			</motion.div>
		</div>
	)
}
