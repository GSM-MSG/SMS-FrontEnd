import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder?: string
  onUpload(e: ChangeEvent<HTMLInputElement>): Promise<string>
  errors?: string
}

/**
 * 파일을 입력 받지만 값이 변경이 안돼서 setValue를 통해 직접 수정해야함
 */
const FileInput = forwardRef<HTMLInputElement, Props>(
  ({ placeholder = '＋hwp 파일 추가', onUpload, errors, ...props }, ref) => {
    const [fileName, setFileName] = useState<string>('')

    const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
      const result = await onUpload(e)
      if (!result) return (e.target.value = '')

      const files = e.target.files
      if (files && files[0]) setFileName(files[0].name)
    }

    return (
      <>
        <S.HiddenInput {...props} ref={ref} readOnly />
        <S.Wrapper>
          <S.InputWrapper>
            {fileName === '' ? placeholder : fileName}
            <S.Input onChange={onChange} type='file' accept='.hwp,.hwpx' />
          </S.InputWrapper>
          <S.Error>{errors}</S.Error>
        </S.Wrapper>
      </>
    )
  }
)

FileInput.displayName = 'FileInput'

export default FileInput
