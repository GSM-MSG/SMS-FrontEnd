import { ChangeEvent, useState } from 'react'
import * as S from './style'

interface Props {
  placeholder?: string
  onUpload(e: ChangeEvent<HTMLInputElement>): Promise<void>
}

const FileInput = ({ placeholder = '＋hwp 파일 추가', onUpload }: Props) => {
  const [fileName, setFileName] = useState<string>('')

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    await onUpload(e)
    const files = e.target.files
    if (files && files[0]) setFileName(files[0].name)
  }

  return (
    <S.Wrapper>
      {fileName === '' ? placeholder : fileName}
      <S.Input onChange={onChange} type='file' accept='.hwp,.hwpx' />
    </S.Wrapper>
  )
}

export default FileInput
