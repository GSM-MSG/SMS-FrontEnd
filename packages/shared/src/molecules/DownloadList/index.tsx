import { DetailedHTMLProps, HTMLAttributes } from 'react'
import * as S from './style'
import File from './File'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title?: string
}

const DownloadList = ({
  title = '파일 다운로드',
  children,
  ...props
}: Props) => {
  return (
    <S.Wrapper {...props}>
      <S.Title>{title}</S.Title>

      <S.FileList>{children}</S.FileList>
    </S.Wrapper>
  )
}

DownloadList.File = File

export default DownloadList
