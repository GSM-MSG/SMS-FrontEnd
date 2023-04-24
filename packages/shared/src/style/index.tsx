import { ThemeProvider } from '@emotion/react'
import { ReactElement } from 'react'
import { typography } from './typography'

interface Props {
  children: ReactElement
}

const StyleProvider = ({ children }: Props) => {
  return <ThemeProvider theme={typography}>{children}</ThemeProvider>
}

export default StyleProvider
