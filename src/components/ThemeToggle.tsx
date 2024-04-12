import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches)
			setIsDark(true)
	}, [])

	function toggleTheme() {
		setIsDark(!isDark)
		document.documentElement.classList.toggle('dark')
	}
	return (
		<button
			onClick={toggleTheme}
			className="fixed right-4 top-4 rounded-full bg-gray-200 p-2 transition
			hover:bg-gray-200/75 dark:bg-gray-500"
		>
			<Moon className="hidden size-6 text-slate-200 dark:block" />
			<Sun className="size-6 text-yellow-500 dark:hidden " />
		</button>
	)
}
