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
  isPreview?: boolean
}

const Profile = forwardRef<HTMLInputElement, Props>(
  ({ error, isPreview, ...props }, ref) => {
    const [url, setUrl] = useState<string>('')

    const onChange = async (e: ChangeEvent<HTMLInputElement>) =>
      setUrl((await props.onChange(e)) || url)

    return (
      <div>
        <S.InputLabel>
          <input
            onChange={onChange}
            type='file'
            accept='image/*'
            hidden
            ref={ref}
          />

          {!isPreview && url ? (
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
