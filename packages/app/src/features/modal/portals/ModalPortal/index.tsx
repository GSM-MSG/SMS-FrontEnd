import { usePortal } from '@features/modal/hooks'
import { cloneElement, ReactElement } from 'react'
import ReactDOM from 'react-dom'
import * as S from './style'

interface Props {
  children: ReactElement
}

const ModalPortal = ({ children }: Props) => {
  const portal = usePortal()

  if (!portal) return <></>

  return ReactDOM.createPortal(
    <S.Wrapper onClick={portal.onClose}>
      {cloneElement(children, { onClick: portal.onClick })}
    </S.Wrapper>,
    portal.portal
  )
}

export default ModalPortal
