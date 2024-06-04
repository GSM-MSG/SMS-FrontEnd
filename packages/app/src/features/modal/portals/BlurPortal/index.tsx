import { usePortal } from '@features/modal/hooks'
import ReactDOM from 'react-dom'
import { cloneElement, ReactElement } from 'react'
import * as S from './style'

interface Props {
  children: ReactElement
  isModalOpen?: boolean
}

/**
 * 배경은 blur로 되어 있음
 */
const BlurPortal = ({ children, isModalOpen }: Props) => {
  const portalValue = usePortal(true)

  if (!portalValue) return null

  const { onClick, onClose, portal } = portalValue

  const handleClick = isModalOpen ? undefined : onClose

  return ReactDOM.createPortal(
    <S.Wrapper onClick={handleClick}>
      {cloneElement(children, { onClick })}
    </S.Wrapper>,
    portal
  )
}

export default BlurPortal
