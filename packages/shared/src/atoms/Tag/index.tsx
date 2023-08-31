import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { XmarkOutline } from '../../icons'

const Wrapper = styled.span`
  ${({ theme }) => theme.body2}
  padding: 0.5rem 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: var(--N10);
  color: var(--N50);
  border-radius: 0.25rem;
`

const XIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  onRemove?: () => void
}

const Tag = ({ children, onRemove }: Props) => {
  return (
    <Wrapper>
      {children}
      <XIcon onClick={onRemove}>
        <XmarkOutline />
      </XIcon>
    </Wrapper>
  )
}

export default Tag
