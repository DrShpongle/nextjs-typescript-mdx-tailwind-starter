import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
