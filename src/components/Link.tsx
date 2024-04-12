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
			<MouseFollower className="pointer-events-none" offset={{ y: -160 }} transformOrigin="bottom">
				<motion.div
					className={`pointer-events-none h-[280px] w-[400px]
					overflow-hidden rounded-xl border border-neutral-200 bg-white p-1.5 shadow-xl 
					transition-opacity duration-300 dark:border-neutral-600 dark:bg-neutral-800`}

					initial={{
						clipPath: 'inset(90% 50% 10% 50% round 10px)',
					}}
					animate={{
						clipPath: isHovering ? 'inset(0% 0% 0% 0% round 10px)' : 'inset(90% 50% 10% 50% round 10px)',

					}}

					transition={{
						duration: isHovering ? 0.2 : 0.1,
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
