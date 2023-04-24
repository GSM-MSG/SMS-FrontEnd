import { typography } from 'shared'
import { ThemeProvider } from '@emotion/react'
import 'shared/dist/index.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={typography}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
