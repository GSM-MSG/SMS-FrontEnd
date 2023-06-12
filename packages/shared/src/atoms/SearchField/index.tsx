import * as SVG from '../../assets/svg'
import * as Icon from '../../icons'
import * as S from './style'

const SearchField = () => {
  return (
    <S.Wrapper>
      <S.LogoWrapper href='/'>
        <SVG.SMSLogo />
      </S.LogoWrapper>
      <S.InfoWrapper>
        <S.Filter>
          <Icon.Filter />
          필터
        </S.Filter>
        <S.UserCircle>
          <SVG.Person />
        </S.UserCircle>
      </S.InfoWrapper>
    </S.Wrapper>
  )
}

export default SearchField
