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
}

const FileInput = forwardRef<HTMLInputElement, Props>(
  ({ error, onChange, ...props }, ref) => {
    const [filename, setFilename] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (!file) return
      if (onChange) onChange(e)
      setFilename(file.name)
    }

    return (
      <div>
        <S.FileInput>
          <input
            type='file'
            hidden
            onChange={handleChange}
            ref={ref}
            {...props}
          />
          <S.FileName>{filename}</S.FileName>

          <Icon.Folder />
        </S.FileInput>

        {error && <S.Error>{error}</S.Error>}
      </div>
    )
  }
)

FileInput.displayName = 'FileInput'

export default FileInput
