import { RootState } from '@store'
import { cloneElement, ReactNode } from 'react'
import { useSelector } from 'react-redux'

interface Props {
  children: ReactNode
}

const ModalProvider = ({ children }: Props) => {
  const { modalElement, props } = useSelector((state: RootState) => ({
    modalElement: state.modal.element,
    props: state.modal.props,
  }))

  return (
    <>
      {children}
      {modalElement && cloneElement(modalElement, { ...props })}
    </>
  )
}

export default ModalProvider
