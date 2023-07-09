import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageWrapper = styled.div`
  text-align: center;
  img {
    width: 90%;
    max-width: 47.75rem;
    max-height: 22.5rem;
    margin-bottom: 1rem;
    object-fit: contain;
  }
`

export const Title = styled.p`
  ${({ theme }) => theme.title1}
  width: 90%;
  text-align: center;
  word-break: keep-all;
  line-height: 1.5;
`

export const Body = styled.p`
  ${({ theme }) => theme.body1}
  color: var(--N40);
  text-align: center;
  margin: 1.5rem 0 1.5rem 0;
`

export const ButtonWrapper = styled.div`
  width: 10rem;
  margin: 0 auto;

  a {
    display: block;
    width: 100%;
    text-align: center;
    border-radius: 0.5rem;
    padding: 0.75rem;
    outline: none;
    transition: 0.2s;
    ${(props) => props.theme.title2}
    background: var(--P2);
    color: var(--WHITE);
    text-decoration: none;

    &:hover {
      background: var(--P1);
    }

    &:active {
      background: var(--P3);
    }
  }
`
