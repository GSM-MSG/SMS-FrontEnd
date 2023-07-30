import styled from '@emotion/styled'

export const Wrapper = styled.div``

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Errors = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  margin-top: 0.5rem;
  gap: 3.5rem;
`

export const Error = styled.p`
  ${({ theme }) => theme.caption1}
  color: var(--ERROR);
`

export const IconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`
