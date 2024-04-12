import { Video } from '@components/Video'

export function ReactWork() {
	return (
		<div
			className="w-screen overflow-x-scroll snap-x snap-proximity mt-32 h-[750px] flex
			px-32"
		>
			<div className="flex gap-16">
				<Video
					poster="/dia-poster.png"
					src="/dia-reel.mp4"
					className="w-[500px] rounded-xl object-cover h-full"
				/>
				<div className="mt-16">
					<h2 className="text-8xl font-serif">Dia</h2>
					<h3 className="text-4xl font-serif opacity-75 font-thin">
						An app to empower women in their fertility journey.
					</h3>
					<article className="prose prose-invert mt-8">

						{/* Badges */}
						<p>This was a fun one. Tons of micro-animations and interactivity</p>
					</article>
				</div>

			</div>
		</div>
	)
}
