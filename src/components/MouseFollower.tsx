import { useMousePosition } from '@hooks/useMousePosition'
import { useRect } from '@hooks/useRect'
import { createPortal } from 'react-dom'

interface MouseFollowerProps {
	offset?: { x?: number, y?: number }
	children: React.ReactNode
	className?: string
	transformOrigin?: 'center' | 'top' | 'bottom'
}

export function MouseFollower({ offset, children, className, transformOrigin = 'center' }: MouseFollowerProps) {
	const { pos, smoothSpeed } = useMousePosition()
	const { ref, rect } = useRect<HTMLDivElement>()

	return createPortal(
		<div
			className={`fixed left-0 top-0 ${className}`}
			style={{
				translate: `${
					pos.x - ((rect?.width ?? 0) / 2) + (offset?.x ?? 0)
				}px 
				${
					pos.y - ((rect?.height ?? 0) / 2) + (offset?.y ?? 0)
				}px`,
				transformOrigin: `center ${transformOrigin}`,
				rotate: `${-smoothSpeed.x * 1.5}deg`,
			}}
			ref={ref}
		>
			{children}
		</div>,
		document.body,
	)
}
