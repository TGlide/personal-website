interface VideoProps {
	src: string
	poster: string
	className?: string
}

export function Video({ src, poster }: VideoProps) {
	return (
		<video
			poster={poster}
			className="w-[500px] rounded-xl object-cover h-full"
		>
			<source src={src} type="video/mp4" />
		</video>
	)
}
