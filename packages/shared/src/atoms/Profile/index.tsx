import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
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

const Profile = ({ error, onUpload, ...props }: Props) => {
  const [imgUrl, setImgUrl] = useState<string>('')

  const onChange = async (e: ChangeEvent<HTMLInputElement>) =>
    setImgUrl(await onUpload(e))

  return (
    <>
      <S.TextInput {...props} value={imgUrl} />
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

Profile.displayName = 'Profile'

export default Profile
