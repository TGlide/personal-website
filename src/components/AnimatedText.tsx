import { motion } from 'framer-motion'

interface AnimatedTextProps {
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
	text: string
	delay?: number
	initialDelay?: number
	duration?: number
	className?: string
}

export function AnimatedText(
	{ tag, text, initialDelay = 0, delay = 0.1, duration = 0.5, className }: AnimatedTextProps,
) {
	const variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	}

	const Component = tag

	const letters = text.split('')

	let accumulatedDelay = initialDelay

	return (
		<Component
			className={className}
		>
			{letters.map((letter, index) => {
				if (letter.trim()) accumulatedDelay += delay

				return (
					<motion.span
						className="inline-block"
						key={index}
						initial="hidden"
						animate="visible"
						variants={variants}
						transition={{
							delay: accumulatedDelay,
							duration,
							type: 'spring',
							bounce: 0.5,

						}}
					>
						{letter.trim() || '\u00A0'}
					</motion.span>
				)
			})}
		</Component>
	)
}
