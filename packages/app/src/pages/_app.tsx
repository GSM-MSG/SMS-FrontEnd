import { Provider } from 'react-redux'
import GlobalLayout from '@layouts/GlobalLayout'
import wrapper from '@store'
import type { AppProps } from 'next/app'

import 'shared/dist/index.css'
import '@styles/font.css'

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <GlobalLayout>
        <Component {...props.pageProps} />
      </GlobalLayout>
    </Provider>
  )
}
