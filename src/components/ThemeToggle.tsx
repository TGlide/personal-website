import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setIsDark(true)
			document.documentElement.classList.add('dark')
		}
	}, [])

	function toggleTheme() {
		setIsDark(!isDark)
		document.documentElement.classList.toggle('dark')
	}
	return (
		<button
			onClick={toggleTheme}
			className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-500
			hover:bg-opacity-75 transition"
		>
			{isDark
				? (
					<Moon className="w-6 h-6 text-slate-200" />
					)
				: (
					<Sun className="w-6 h-6 text-yellow-500" />
					)}
		</button>
	)
}
