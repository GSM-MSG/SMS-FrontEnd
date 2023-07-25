import { Provider } from 'react-redux'
import GlobalLayout from '@layouts/GlobalLayout'
import { ToastContainer } from '@features/toast'
import { ModalProvider } from '@features/modal/providers'
import wrapper from '@store'
import type { AppProps } from 'next/app'

import '@sms/shared/src/style/index'
import '@styles/font.css'

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <GlobalLayout>
        <ModalProvider>
          <Component {...props.pageProps} />
        </ModalProvider>
        <ToastContainer />
      </GlobalLayout>
    </Provider>
  )
}
