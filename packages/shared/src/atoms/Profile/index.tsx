import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react'
import { Plus } from '../../icons'
import * as SVG from '../../assets/svg'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string
  onUpload: (e: ChangeEvent<HTMLInputElement>) => Promise<string>
}

const Profile = forwardRef<HTMLInputElement, Props>(
  ({ error, onUpload, ...props }, ref) => {
    const [imgUrl, setImgUrl] = useState<string>('')

    const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
      const url = await onUpload(e)
      if (!url) return (e.target.value = '')
      setImgUrl(url)
    }

    return (
      <>
        <S.HiddenInput {...props} readOnly ref={ref} />
        <S.Wrapper>
          <S.ProfileWrapper>
            <S.ImageInput type='file' accept='image/*' onChange={onChange} />
            {imgUrl ? (
              <S.UserTempImg src={imgUrl} alt='temp img' />
            ) : (
              <SVG.Person />
            )}
            <S.DarkBackground>
              <Plus />
            </S.DarkBackground>
          </S.ProfileWrapper>
          <S.ErrorMessage>{error}</S.ErrorMessage>
        </S.Wrapper>
      </>
    )
  }
)

Profile.displayName = 'Profile'

export default Profile
