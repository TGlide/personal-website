import { useState } from 'react'

interface VideoProps {
	src: string
	poster: string
	className?: string
}

export function Video({ src, poster }: VideoProps) {
	const [isHovering, setIsHovering] = useState(false)
	return (
		<video
			poster={poster}
			className="h-full w-[500px] rounded-xl object-cover"
		>
			<source src={src} type="video/mp4" />
		</video>
	)
}
