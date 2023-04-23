import styled from '@emotion/styled'

const Main = styled.main`
  ${(props) => props.theme.headline1}
`

export default function Home() {
  return <Main style={{ background: 'var(--P1)' }}>Hello</Main>
}
