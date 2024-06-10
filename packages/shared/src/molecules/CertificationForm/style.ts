import styled from '@emotion/styled'

export const Wrapper = styled.div`
  max-width: 44rem;
  border-radius: 1rem;
  background: #fff;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Icons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const Icon = styled.span`
  cursor: pointer;
  width: 1.5rem;
`

export const Title = styled.h3`
  ${({ theme }) => theme.title1}
`

export const Field = styled.section`
  display: flex;
  align-items: start;
  display: grid;
  grid-template-columns: 1fr 3fr;
`

export const Label = styled.label`
  ${({ theme }) => theme.body1}
  white-space: nowrap;
  color: var(--N40);
`
