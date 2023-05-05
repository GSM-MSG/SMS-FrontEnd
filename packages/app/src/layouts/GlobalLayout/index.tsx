import { typography, Dialog } from 'shared'
import { ThemeProvider } from '@emotion/react'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@store'

interface Props {
  children: ReactNode
}

const GlobalLayout = ({ children }: Props) => {
  const { dialog } = useSelector((state: RootState) => ({
    dialog: state.dialog,
  }))

  return (
    <>
      {dialog.isShow && (
        <Dialog
          title={dialog.title}
          content={dialog.content}
          cancelText={dialog.cancelText}
          confirmText={dialog.confirmText}
          emitter={dialog.emitter}
        />
      )}
      <ThemeProvider theme={typography}>{children}</ThemeProvider>
    </>
  )
}

export default GlobalLayout
