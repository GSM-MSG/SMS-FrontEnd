import { typography } from 'shared'
import { ThemeProvider } from '@emotion/react'
import 'shared/dist/index.css'
import '@/styles/font.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import wrapper from '@/store'

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <ThemeProvider theme={typography}>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </ThemeProvider>
  )
}
