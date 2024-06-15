import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import GlobalLayout from '@layouts/GlobalLayout'
import { ToastContainer } from '@features/toast'
import { ModalProvider } from '@features/modal/providers'
import useAutoReissue from '@features/auth/hook/useAutoReissue'
import wrapper from '@store'
import type { AppProps } from 'next/app'

import '@sms/shared/src/style/index'
import '@styles/font.css'

const client = new QueryClient()

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  useAutoReissue()

  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <GlobalLayout>
          <ModalProvider>
            <Component {...props.pageProps} />
          </ModalProvider>
          <ToastContainer />
        </GlobalLayout>
      </Provider>
    </QueryClientProvider>
  )
}
