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
  onChange: (e: ChangeEvent<HTMLInputElement>) => Promise<string | void>
}

const Profile = forwardRef<HTMLInputElement, Props>(
  ({ error, ...props }, ref) => {
    const [url, setUrl] = useState<string>('')

    const onChange = async (e: ChangeEvent<HTMLInputElement>) =>
      setUrl((await props.onChange(e)) || url)

    return (
      <div>
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

        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </div>
    )
  }
)

Profile.displayName = 'Profile'

export default Profile
