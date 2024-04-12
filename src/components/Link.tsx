import { useMousePosition } from '@hooks/useMousePosition'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

interface LinkProps {
	img: string
	children: string
	className?: string
	href: string
}

export function Link({ img, className, children, href }: LinkProps) {
	const [isHovering, setIsHovering] = useState(false)
	const { pos, speed } = useMousePosition()

	return (
		<>
			<a
				className={className}
				onMouseOver={() => setIsHovering(true)}
				onMouseLeave={() => setIsHovering(false)}
				href={href}
				target="_blank"
			>
				{children}
			</a>
			{createPortal(
				<motion.div
					className={`pointer-events-none fixed left-[-100px] top-[-156px] h-[140px] w-[200px]
					overflow-hidden rounded-xl border border-neutral-200 bg-white p-1.5 shadow-xl 
					transition-opacity duration-300 dark:border-neutral-600 dark:bg-neutral-800`}
					style={{
						translate: `${pos.x}px ${pos.y}px`,
						transformOrigin: 'center bottom',
						rotate: `${-speed.x / 3}deg`,
					}}

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
				</motion.div>,
				document.body,
			)}
		</>

	)
}
