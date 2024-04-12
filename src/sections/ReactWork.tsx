import { WorkItem } from '@components/WorkItem'
import { useWindowSize } from '@uidotdev/usehooks'
import { ExternalLink, PlayCircle } from 'lucide-react'

export function ReactWork() {
	const _size = useWindowSize()
	const size = { width: _size.width || 0, height: _size.height || 0 }

	return (
		<div
			className="mt-32 flex h-[750px] snap-x snap-mandatory gap-32 overflow-x-scroll pb-4"
			style={{
				paddingInline: Math.max((size.width - 1000) / 2, 16),
			}}
		>
			<WorkItem
				title="Dia"
				description="An app to empower women in their fertility journey"
				video={{
					poster: '/images/dia-poster.png',
					src: '/videos/dia-reel.mp4',

				}}
				badges={(
					<>
						<span className="relative inline-block
          after:absolute after:bottom-1 after:left-0 after:z-[-1] after:h-1
          after:w-full after:border-b-[6px] after:border-blue-600/75"
						>
							React Native
						</span>
						<span>•</span>
						<span className="relative inline-block
          after:absolute after:bottom-1 after:left-0 after:z-[-1] after:h-1
          after:w-full after:border-b-[6px] after:border-red-600/50"
						>
							Red Dot
						</span>
						<span>•</span>
						<span className="relative inline-block
          after:absolute after:bottom-1 after:left-0 after:z-[-1] after:h-1
          after:w-full after:border-b-[6px] after:border-[hsl(39,_52%,_25%)]"
						>
							European Design Award
						</span>
					</>
				)}
				hoverButton={(
					<>
						<PlayCircle className="inline-block size-4" />
						<span>Play video</span>
					</>
				)}
			>

				<p>
					A delightful app to use, and create. Still one of the most fun projects I worked on!
					Featuring custom multi-axis sliders that triggered dynamic animations, hand-made charts,
					tons of micro-interactions and animations, and a lot of love.
				</p>
			</WorkItem>
			<WorkItem
				title="The Fertility Partnership"
				description="An app to empower women in their fertility journey"
				image={{
					src: '/images/dia-poster.png',
					alt: '',
				}}
				badges={(
					<>
						<span className="relative inline-block
          after:absolute after:bottom-1 after:left-0 after:z-[-1] after:h-1
          after:w-full after:border-b-[6px] after:border-blue-600/75"
						>
							React Native
						</span>
						<span>•</span>
						<span className="relative inline-block
          after:absolute after:bottom-1 after:left-0 after:z-[-1] after:h-1
          after:w-full after:border-b-[6px] after:border-red-600/50"
						>
							Red Dot
						</span>
						<span>•</span>
						<span className="relative inline-block
          after:absolute after:bottom-1 after:left-0 after:z-[-1] after:h-1
          after:w-full after:border-b-[6px] after:border-[hsl(39,_52%,_25%)]"
						>
							European Design Award
						</span>
					</>
				)}
				hoverButton={(
					<>
						<ExternalLink className="inline-block size-4" />
						<span>Check it out</span>
					</>
				)}
				onHoverButtonClick={() => {
					window.open('https://tfp-fertility.com/en')
				}}
			>

				<p>
					A delightful app to use, and create. Still one of the most fun projects I worked on!
					Featuring custom multi-axis sliders that triggered dynamic animations, hand-made charts,
					tons of micro-interactions and animations, and a lot of love.
				</p>
			</WorkItem>
		</div>
	)
}
