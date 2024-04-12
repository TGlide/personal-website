import { Video } from '@components/Video'

export function ReactWork() {
	return (
		<div
			className="mt-32 flex h-[750px] w-screen snap-x snap-proximity overflow-x-scroll
			px-32"
		>
			<div className="flex gap-16">
				<Video
					poster="/images/dia-poster.png"
					src="/videos/dia-reel.mp4"
					className="h-full w-[500px] rounded-xl object-cover"
				/>
				<div className="mt-16">
					<h2 className="font-serif text-8xl">Dia</h2>
					<h3 className="font-serif text-4xl font-thin opacity-75">
						An app to empower women in their fertility journey.
					</h3>
					<article className="prose mt-8 dark:prose-invert">

						{/* Badges */}
						<p>This was a fun one. Tons of micro-animations and interactivity</p>
					</article>
				</div>

			</div>
		</div>
	)
}
