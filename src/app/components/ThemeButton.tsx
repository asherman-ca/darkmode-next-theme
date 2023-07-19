'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeButton = () => {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)
	}, [])

	// sure it only run on client to prevent hydration error

	if (!mounted) return null

	return (
		<div className='flex flex-col gap-4'>
			<p>The theme is {theme}</p>
			<button onClick={() => setTheme('light')}>Light Mode</button>
			<button onClick={() => setTheme('dark')}>Dark Mode</button>
			<button onClick={() => setTheme('system')}>System Mode</button>
		</div>
	)
}

export default ThemeButton
