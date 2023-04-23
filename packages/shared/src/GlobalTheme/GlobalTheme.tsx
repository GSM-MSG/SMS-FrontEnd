import { ThemeProvider } from '@emotion/react'
import { ReactElement } from 'react'
import typograpy from './typography'
import './globals.css'

interface Props {
  children: ReactElement
}

const GlobalTheme = ({ children }: Props) => {
  return <ThemeProvider theme={typograpy}>{children}</ThemeProvider>
}

export default GlobalTheme
