import { useRef, useState } from 'react'
import { PlayCircle } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import { MouseFollower } from './MouseFollower'

interface VideoProps {
	src: string
	poster: string
	className?: string
}

export function Video({ src, poster }: VideoProps) {
	const [isHovering, setIsHovering] = useState(false)
	const [dialogOpen, setDialogOpen] = useState(false)

	return (
		<>
			<div className="relative h-full w-[500px] rounded-xl">
				<img
					className="block size-full cursor-none rounded-xl object-cover"
					src={poster}
					alt=""
					onMouseMove={() => setIsHovering(true)}
					onMouseLeave={() => setIsHovering(false)}
					onClick={() => setDialogOpen(true)}
				/>
			</div>
			<MouseFollower className="pointer-events-none">
				<button
					className={`flex items-center gap-2 rounded-xl bg-black px-3 py-2
					font-bold text-white transition-all
					${isHovering ? 'opacity-100' : 'scale-0 opacity-0'}`}
				>
					<PlayCircle className="inline-block size-4" />
					<span>Play video</span>
				</button>
			</MouseFollower>
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
							src={
							src
						}
							controls
							poster={poster}
						/>

					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</>
	)
}
