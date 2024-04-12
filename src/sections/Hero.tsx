import { AnimatedText } from '@components/AnimatedText'
import { motion } from 'framer-motion'

export function Hero() {
	return (
		<div
			className="relative mx-auto flex max-w-[630px] flex-col justify-end px-4 pt-32 font-serif
			xl:container xl:h-[800px] xl:pt-0"
		>
			<AnimatedText className="text-6xl font-black xl:text-[15rem]" text="Hi." tag="h1" />
			<AnimatedText
				text="I'm Thomas."
				tag="h2"
				initialDelay={1}
				delay={0.065}
				className="mt-4 text-5xl font-black xl:text-[13rem]"
			/>

			<motion.div
				className="absolute right-8 top-8 w-[120px] overflow-hidden rounded-xl sm:w-[200px]
				xl:right-[200px] xl:top-[180px] xl:w-[360px]"
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
