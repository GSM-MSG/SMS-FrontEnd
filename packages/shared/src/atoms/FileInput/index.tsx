import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import * as S from './style'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const FileInput = ({ placeholder = '＋hwp 파일 추가', ...props }: Props) => {
  const [fileName, setFileName] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files[0]) setFileName(files[0].name)

    if (props.onChange) props.onChange(e)
  }

  return (
    <>
      <S.Wrapper>
        {fileName === '' ? placeholder : fileName}
        <S.Input
          {...props}
          onChange={onChange}
          type='file'
          accept='.hwp,.hwpx'
        />
      </S.Wrapper>
    </>
  )
}

export default FileInput
