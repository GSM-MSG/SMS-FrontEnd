import styled from '@emotion/styled'

const Item = styled.label`
  ${({ theme }) => theme.body1}
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  background: var(--WHITE);
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  transition: 0.2s;
  color: var(--BLACK);
  cursor: pointer;

  :hover {
    background: var(--N10);
  }
`

export default Item
