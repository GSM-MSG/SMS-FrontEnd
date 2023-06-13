import {
  cloneElement,
  useEffect,
  useState,
  MouseEvent,
  ReactElement,
} from 'react'
import ReactDOM from 'react-dom'
import * as S from './style'

interface Props {
  children: ReactElement
  onClose?: () => void
}

const ModalPortal = ({ onClose, children }: Props) => {
  const [isCSR, setIsCSR] = useState(false)

  useEffect(() => {
    setIsCSR(true)
  }, [])

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      width: 100%;`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = ''
      window.scrollTo(0, -parseInt(scrollY))
    }
  }, [])

  if (typeof window === 'undefined') return <></>
  if (!isCSR) return <></>

  const portal = document.getElementById('modal')
  if (!portal) throw new Error('Not found modal')

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return ReactDOM.createPortal(
    <S.Wrapper onClick={onClose}>
      {cloneElement(children, { onClick })}
    </S.Wrapper>,
    portal
  )
}

export default ModalPortal
