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
  onChange?: (
    e: ChangeEvent<HTMLInputElement>
  ) => string | undefined | Promise<string | undefined>
  placeholder?: string
  error?: string
}

const FileInput = forwardRef<HTMLInputElement, Props>(
  ({ error, onChange, placeholder, ...props }, ref) => {
    const [filename, setFilename] = useState<string>()

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) setFilename(await onChange(e))
    }

    return (
      <div>
        <S.FileInput tabIndex={0}>
          <input
            type='file'
            hidden
            onChange={handleChange}
            ref={ref}
            {...props}
          />
          <S.FileName>{filename ?? placeholder}</S.FileName>

          <Icon.Folder />
        </S.FileInput>

        {error && <S.Error>{error}</S.Error>}
      </div>
    )
  }
)

FileInput.displayName = 'FileInput'

export default FileInput
