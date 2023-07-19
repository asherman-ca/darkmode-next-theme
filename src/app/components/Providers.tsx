'use client'
import { ThemeProvider } from 'next-themes'
import { FC } from 'react'

interface ProvidersProps {
	children: React.ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
			{children}
		</ThemeProvider>
	)
}

export default Providers
