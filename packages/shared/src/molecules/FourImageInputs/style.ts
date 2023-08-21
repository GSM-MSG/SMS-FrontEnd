import styled from '@emotion/styled'

export const Wrapper = styled.div``

export const Images = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gridtemplate-rows: 1fr 1fr;
  gap: 0.5rem;
`

export const Error = styled.p`
  ${({ theme }) => theme.caption1}
  color: var(--ERROR);
  margin-top: 0.5rem;
`
