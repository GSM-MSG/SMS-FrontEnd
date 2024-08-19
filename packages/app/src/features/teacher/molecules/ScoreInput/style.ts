import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`

export const Title = styled.h3`
  ${({ theme }) => theme.title2}
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const ArrowIcon = styled.label`
  display: inline;
  width: 1.5rem;
  height: 1.5rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SubmitButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`
