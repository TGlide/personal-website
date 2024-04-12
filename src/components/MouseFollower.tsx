import { useMousePosition } from '@hooks/useMousePosition'
import { createPortal } from 'react-dom'

interface MouseFollowerProps {
	offset?: { x?: number, y?: number }
	children: React.ReactNode
	className?: string
}

export function MouseFollower({ offset, children, className }: MouseFollowerProps) {
	const { pos, speed } = useMousePosition()

	return createPortal(
		<div
			className={`fixed left-0 top-0 ${className}`}
			style={{
				translate: `${pos.x + (offset?.x ?? 0)}px ${pos.y + (offset?.y ?? 0)}px`,
				transformOrigin: 'center bottom',
				rotate: `${-speed.x / 1.5}deg`,
			}}
		>

			{children}
		</div>,
		document.body,
	)
}
