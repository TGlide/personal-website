import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useEventLister } from '@hooks/useEventListener'
import { MouseFollower } from './MouseFollower'

interface LinkProps {
	img: string
	children: string
	className?: string
	href: string
}

export function Link({ img, className, children, href }: LinkProps) {
	const [isHovering, setIsHovering] = useState(false)
	const el = useRef<HTMLAnchorElement>(null)

	useEventLister(window, 'scroll', () => {
		setIsHovering(false)
	})

	return (
		<>
			<a
				className={className}
				onMouseMove={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
				href={href}
				target="_blank"
				ref={el}
			>
				{children}
			</a>
			<MouseFollower className="pointer-events-none" offset={{ x: -100, y: -156 }}>
				<motion.div
					className={`pointer-events-none h-[140px] w-[200px]
					overflow-hidden rounded-xl border border-neutral-200 bg-white p-1.5 shadow-xl 
					transition-opacity duration-300 dark:border-neutral-600 dark:bg-neutral-800`}

					animate={{
						opacity: isHovering ? 1 : 0,
						clipPath: isHovering ? 'inset(0% 0% 0% 0% round 10px)' : 'inset(90% 50% 10% 50% round 10px)',

					}}

					transition={{
						duration: isHovering ? 0.2 : undefined,
					}}
				>

					<img
						src={img}
						alt=""
						className="size-full rounded-lg object-cover"

					/>
				</motion.div>
			</MouseFollower>

		</>

	)
}
