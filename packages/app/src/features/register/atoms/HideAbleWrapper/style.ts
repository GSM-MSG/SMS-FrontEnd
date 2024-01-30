import styled from '@emotion/styled'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h3`
  ${({ theme }) => theme.title1}
`

export const Icons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const Icon = styled.label`
  cursor: pointer;
  height: 1.5rem;

  svg {
    transition: 0.2s;
  }
`

export const HideAnimationInput = styled.input`
  &:checked ~ svg {
    transform: rotate(90deg);
  }
`

interface ContentProps {
  isChecked: boolean
}

export const Content = styled.div<ContentProps>`
  margin-top: 2.5rem;
  transition: 0.2s;

  ${({ isChecked }) =>
    isChecked &&
    `
    margin-top: 0;
    height: 0;
    overflow: hidden;
  `}
`
