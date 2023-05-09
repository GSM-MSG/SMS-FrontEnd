import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useRef,
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
  error: string
}

const Profile = forwardRef<HTMLInputElement, Props>(
  ({ error, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [tempImg, setTempImg] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (!files || !files[0]) return

      setTempImg(URL.createObjectURL(files[0]))

      if (props.onChange) props.onChange(e)
    }

    const onClick = () => {
      if (ref && 'current' in ref) ref.current?.click()
      inputRef.current?.click()
    }

    return (
      <>
        <S.Wrapper>
          <S.ImageInput
            {...props}
            type='file'
            ref={ref || inputRef}
            accept='image/*'
            onChange={onChange}
          />
          <S.ProfileWrapper onClick={onClick}>
            {tempImg ? (
              <S.UserTempImg src={tempImg} alt='temp img' />
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
