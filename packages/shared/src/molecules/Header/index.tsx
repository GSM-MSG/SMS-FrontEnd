import { useState } from 'react'
import * as SVG from '../../assets/svg'
import * as Icon from '../../icons'
import * as S from './style'

interface Props {
  onLogout?: () => void
  onExit?: () => void
  onFilter?: () => void
}

const Header = ({ onExit, onLogout, onFilter }: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <S.Wrapper>
      <S.LogoWrapper href='/'>
        <SVG.SMSLogo />
      </S.LogoWrapper>
      <S.InfoWrapper>
        <S.Filter onClick={onFilter}>
          <Icon.Filter />
          <p>필터</p>
        </S.Filter>
        <S.UserCircle onClick={() => setIsShow(true)}>
          <SVG.Person />
        </S.UserCircle>
        <S.DropdownMenu isShow={isShow} onClose={() => setIsShow(false)}>
          <S.DropdownItem onClick={onLogout}>
            <Icon.Out color='var(--ERROR)' /> 로그아웃
          </S.DropdownItem>

          <S.Line />

          <S.DropdownItem onClick={onExit}>
            <Icon.Person color='var(--ERROR)' /> 회원 탈퇴
          </S.DropdownItem>
        </S.DropdownMenu>
      </S.InfoWrapper>
    </S.Wrapper>
  )
}

export default Header
