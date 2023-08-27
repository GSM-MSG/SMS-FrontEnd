import { useState } from 'react'
import * as SVG from '../../assets/svg'
import * as Icon from '../../icons'
import * as S from './style'

interface Props {
  onLogout?: () => void
  onMyPage?: () => void
  onFilter?: () => void
  isLoggedIn?: boolean
}

const Header = ({ onMyPage, onLogout, onFilter, isLoggedIn }: Props) => {
  const [isShow, setIsShow] = useState<boolean>(false)

  return (
    <S.Wrapper>
      <S.LogoWrapper href='/'>
        <SVG.SMSLogo />
      </S.LogoWrapper>
      <S.InfoWrapper>
        {onFilter && (
          <S.FilterWrapper onClick={onFilter}>
            <Icon.Filter />
          </S.FilterWrapper>
        )}

        {isLoggedIn ? (
          <S.UserInfoWrapper onClick={() => setIsShow(true)}>
            <S.UserInfo>
              <Icon.Bars3 />
            </S.UserInfo>

            <S.UserCircle>
              <SVG.Person />
            </S.UserCircle>

            <S.DropdownMenu isShow={isShow} onClose={() => setIsShow(false)}>
              <S.DropdownItem onClick={onMyPage}>
                <Icon.Person color='var(--N50)' /> 마이페이지
              </S.DropdownItem>

              <S.Line />

              <S.DropdownItem onClick={onLogout}>
                <Icon.Out color='var(--N50)' /> 로그아웃
              </S.DropdownItem>
            </S.DropdownMenu>
          </S.UserInfoWrapper>
        ) : (
          <S.UserInfoWrapperLink href='/login'>
            <S.UserInfo>
              <Icon.Bars3 />
            </S.UserInfo>

            <S.UserCircle>
              <SVG.Person />
            </S.UserCircle>
          </S.UserInfoWrapperLink>
        )}
      </S.InfoWrapper>
    </S.Wrapper>
  )
}

export default Header
