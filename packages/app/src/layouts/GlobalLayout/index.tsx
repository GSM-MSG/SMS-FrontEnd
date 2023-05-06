import { typography } from 'shared'
import { ThemeProvider } from '@emotion/react'
import { ReactNode } from 'react'
import DialogProvider from '@features/dialog/molecules/DialogProvider'

interface Props {
  children: ReactNode
}

const GlobalLayout = ({ children }: Props) => {
  return (
    <>
      <DialogProvider />
      <ThemeProvider theme={typography}>{children}</ThemeProvider>
    </>
  )
}

export default GlobalLayout
