import styled from '@emotion/styled'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 45.25rem;
`

export const HeadLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  align-items: center;
`

export const Title = styled.h2`
  ${({ theme }) => theme.headline3}
`

export const Filter = styled.button`
  ${({ theme }) => theme.body1}
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1.3rem;
  cursor: pointer;
  border: none;
  background-color: transparent;
  border-radius: 0.5rem;
`

export const StudentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
