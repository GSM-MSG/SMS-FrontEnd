import * as Icons from '@sms/shared/src/icons'
import { useContext } from 'react'
import * as S from './style'
import { Context } from './Context'

interface Props {
  children: string
  score?: number | null
}

const Header = ({ children, score }: Props) => {
  const { isHidden, setIsHidden } = useContext(Context)

  return (
    <S.Header style={{ color: isHidden ? 'var(--N30)' : 'black' }}>
      <S.Title>{children}</S.Title>

      <S.HeaderRight>
        <S.Title>{score !== null ? `${score ?? 0}점` : '반려'}</S.Title>
        <S.ArrowIcon
          onClick={() => setIsHidden(!isHidden)}
          style={{
            transform: isHidden ? 'rotate(90deg)' : 'rotate(0)',
          }}
        >
          <Icons.ArrowDown fill={isHidden ? 'var(--N30)' : 'black'} />
        </S.ArrowIcon>
      </S.HeaderRight>
    </S.Header>
  )
}

export default Header
