import { usePortal } from '@features/modal/hooks'
import ReactDOM from 'react-dom'
import { cloneElement, ReactElement, useEffect } from 'react'
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

  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY
      document.body.style.cssText = `
        position: fixed;
        top: -${scrollY}px;
        width: 100%;
      `

      return () => {
        document.body.style.cssText = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [isModalOpen])

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
