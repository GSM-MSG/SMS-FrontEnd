import { ReactNode, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  max-height: 15.5rem;
  padding: 0.75rem;
  background: var(--WHITE);
  border-radius: 0.5rem;
  transition: 0.2s;
  overflow-y: scroll;
  box-shadow: 0px 4px 24px rgba(76, 75, 91, 0.12);
`

interface Props {
  isShow?: boolean
  children: ReactNode
  onClose(): void
}

const Menu = ({ isShow, children, onClose }: Props) => {
  const [isReady, setIsReady] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isShow) return

    const clickHandler = () => {
      if (!isReady) return
      onClose()
      setIsReady(false)
    }

    setIsReady(true)
    document.addEventListener('click', clickHandler)

    return () => document.removeEventListener('click', clickHandler)
  }, [isShow, isReady])

  if (!isShow) return null
  return <Wrapper ref={ref}>{children}</Wrapper>
}

export default Menu
