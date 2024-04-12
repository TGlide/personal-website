import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { MouseFollower } from './MouseFollower'

type WorkItemProps = {
	title: string
	description: string
	badges?: React.ReactNode
	children: React.ReactNode
	hoverButton?: React.ReactNode
	onHoverButtonClick?: () => void
} & ({
	video: {	src: string,	poster: string }
} | {
	image: { src: string, alt: string }
})
export function WorkItem({
	title,
	description,
	children,
	badges,
	hoverButton,
	onHoverButtonClick,
	...props
}: WorkItemProps) {
	const [isHovering, setIsHovering] = useState(false)
	const [dialogOpen, setDialogOpen] = useState(false)

	const posterSrc = 'video' in props ? props.video.poster : props.image.src
	const posterAlt = 'video' in props ? '' : props.image.alt

	return (
		<>
			<div className="relative flex w-[1000px] shrink-0 gap-16">
				<div
					className="h-full flex-[0_0_500px] cursor-none
					[&_img]:h-full [&_img]:rounded-xl [&_img]:object-cover"
					onMouseMove={() => setIsHovering(true)}
					onMouseLeave={() => setIsHovering(false)}
					onClick={() => {
						if (!hoverButton) return
						if (onHoverButtonClick)
							onHoverButtonClick()
						else
							setDialogOpen(true)
					}}
				>
					<img src={posterSrc} alt={posterAlt}></img>

					{hoverButton
						? (
							<MouseFollower className="pointer-events-none">
								<button
									className={`flex items-center gap-2 rounded-xl bg-black px-3 py-2
							font-bold text-white transition-all
							${isHovering ? 'opacity-100' : 'scale-0 opacity-0'}`}
								>
									{hoverButton}
								</button>
							</MouseFollower>
							)
						: null}
				</div>

				<div className="mt-16 shrink">
					<h2 className="font-serif text-6xl">{title}</h2>
					<h3 className="mt-1 font-serif text-4xl font-thin opacity-100">
						{description}
					</h3>
					{badges
						? (
							<div className="mt-2 flex gap-1 font-serif text-xl font-light italic opacity-80">
								{badges}
							</div>
							)
						: null}
					<article className="prose mt-8 dark:prose-invert prose-p:font-semibold">
						{children}
					</article>
				</div>
			</div>
			{'video' in props
				? (
					<Dialog.Root
						open={dialogOpen}
						onOpenChange={(open) => {
							setDialogOpen(open)
						}}
					>
						<Dialog.Portal>
							<Dialog.Overlay
								className="fixed inset-0 bg-black/50 data-[state=open]:animate-in
						data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 "
							/>
							<Dialog.Content
								className="fixed left-1/2 top-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2
						data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0
						data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
						data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
						data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
							>

								<video
									className="w-screen rounded-xl outline-none"
									src={props.video.src}
									controls
									poster={props.video.poster}
								/>

							</Dialog.Content>
						</Dialog.Portal>
					</Dialog.Root>
					)
				: null}
		</>
	)
}
