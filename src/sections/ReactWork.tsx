import { Link } from '@components/Link'
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
				title="Kota"
				description="Work benefits for modern companies."
				video={{
					poster: '/images/kota-poster-2.png',
					src: '/videos/kota.mp4',

				}}
				badges={(
					<>
						<span className="relative inline-block
          after:absolute after:bottom-1 after:left-0 after:z-[-1] after:h-1
          after:w-full after:border-b-[6px] after:border-blue-600/75"
						>
							Next JS
						</span>
						<span>•</span>
						<span className="relative inline-block
          after:absolute after:bottom-1 after:left-0 after:z-[-1] after:h-1
          after:w-full after:border-b-[6px] after:border-teal-600/50"
						>
							Storyblok
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
					I worked on this website while it was still called Yonder (hence the video).
					It changed a lot since then, and unfortunately some of the hard-worked animations
					I worked on are now gone.
				</p>
				<p>
					Nonetheless, I learned a lot from it, and it was a great experience. The colorful
					design reflects a lot of the joy we had building it.
				</p>
				<p>
					Luckily, the
					{' '}
					<Link img="/images/kota-404.png" href="https://www.kota.io/404">404 page</Link>
					{' '}
					is still there! Try and find the 🥚
				</p>
			</WorkItem>
			<WorkItem
				title="The Fertility Partnership"
				description="A European network of fertility centers"
				image={{
					src: '/images/tfp.png',
					alt: '',
				}}
				badges={(
					<>
						<span className="relative inline-block
          after:absolute after:bottom-1 after:left-0 after:z-[-1] after:h-1
          after:w-full after:border-b-[6px] after:border-blue-600/75"
						>
							Next JS
						</span>
						<span>•</span>
						<span className="relative inline-block
          after:absolute after:bottom-1 after:left-0 after:z-[-1] after:h-1
          after:w-full after:border-b-[6px] after:border-teal-600/50"
						>
							Storyblok
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
					Dia's company website. This is a standard Next.js app, using Storyblok for its CMS.
					My first project at
					{' '}
					<Link href="https://significa.co/" img="/images/significa.png">Significa</Link>
					, where these other projects were built at.
				</p>
			</WorkItem>

		</div>
	)
}
