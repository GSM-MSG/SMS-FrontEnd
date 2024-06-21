import { RootState } from '@store'
import { cloneElement, ReactNode } from 'react'
import { useSelector } from 'react-redux'

interface Props {
  children: ReactNode
}

const ModalProvider = ({ children }: Props) => {
  const modalElement = useSelector((state: RootState) => {
    return state.modal.element
  })
  const props = useSelector((state: RootState) => {
    return state.modal.props
  })

  return (
    <>
      {children}
      {modalElement && cloneElement(modalElement, { ...props })}
    </>
  )
}

export default ModalProvider
