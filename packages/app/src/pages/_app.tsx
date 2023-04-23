// import { typograpy } from 'shared'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  //   console.log(typograpy)
  return <Component {...pageProps} />
}
