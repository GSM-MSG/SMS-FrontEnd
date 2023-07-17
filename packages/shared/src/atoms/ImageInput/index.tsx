import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react'
import * as Icon from '../../icons'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => string
}

const Profile = forwardRef<HTMLInputElement, Props>(
  ({ error, ...props }, ref) => {
    const [url, setUrl] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) =>
      setUrl(props.onChange(e))

    return (
      <S.Wrapper>
        <S.InputLabel>
          <input
            {...props}
            onChange={onChange}
            type='file'
            accept='image/*'
            hidden
            ref={ref}
          />

          {url ? (
            <S.ImagePreview src={url} alt='image preview' />
          ) : (
            <Icon.Picture />
          )}
        </S.InputLabel>

        <S.ErrorMessage>{error}</S.ErrorMessage>
      </S.Wrapper>
    )
  }
)

Profile.displayName = 'Profile'

export default Profile
