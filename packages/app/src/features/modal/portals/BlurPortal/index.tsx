import { usePortal } from '@features/modal/hooks'
import ReactDOM from 'react-dom'
import { cloneElement, ReactElement } from 'react'
import * as S from './style'

interface Props {
  children: ReactElement
}

/**
 * 배경은 blur로 되어 있음
 */
const BlurPortal = ({ children }: Props) => {
  const portalValue = usePortal()

  if (!portalValue) return <></>

  const { onClick, onClose, portal } = portalValue

  return ReactDOM.createPortal(
    <S.Wrapper onClick={onClose}>
      {cloneElement(children, { onClick })}
    </S.Wrapper>,
    portal
  )
}

export default BlurPortal
