import { useState } from 'react'
import Image from 'next/image'
import * as SVG from '@sms/shared/src/assets/svg'
import * as Icon from '@sms/shared/src/icons'
import useLogout from '@features/auth/hook/useLogout'
import useMyPage from '@features/student/hooks/useMyPage'
import profileImgApi from '@features/auth/service/profileImgApi'
import useLoggedIn from '@features/auth/hook/useLoggedIn'

import * as S from './style'

interface Props {
  isLoggedIn?: boolean
  onFilter?: () => void
}

const Header = ({ onFilter }: Props) => {
  const { onLogout } = useLogout()
  const { redirectMyPage } = useMyPage()
  const [isShow, setIsShow] = useState<boolean>(false)
  const { isSuccess } = useLoggedIn({})
  const { data } = profileImgApi.useProfileImgQuery()

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

        {isSuccess ? (
          <S.UserInfoWrapper onClick={() => setIsShow(true)}>
            <S.UserInfo>
              <Icon.Bars3 />
            </S.UserInfo>

            <S.UserCircle>
              {data?.profileImgUrl ? (
                <S.UserImgWrapper>
                  <Image
                    src={data?.profileImgUrl}
                    alt='user profile'
                    fill
                    priority
                    sizes='100%'
                    style={{ objectFit: 'cover' }}
                  />
                </S.UserImgWrapper>
              ) : (
                <SVG.Person />
              )}
            </S.UserCircle>

            <S.DropdownMenu isShow={isShow} onClose={() => setIsShow(false)}>
              <S.DropdownItem onClick={redirectMyPage}>
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
