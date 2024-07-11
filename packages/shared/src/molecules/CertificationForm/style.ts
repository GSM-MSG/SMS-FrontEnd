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
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;

  @media (max-width: 30rem) {
    grid-template-columns: none;
    grid-template-rows: 1fr 100%;
    width: 100%;
  }
`

export const Label = styled.label`
  ${({ theme }) => theme.body1}
  word-break: keep-all;
  color: var(--N40);
`

export const FieldContent = styled.div`
  display: flex;
  flex-direction: column;
`
