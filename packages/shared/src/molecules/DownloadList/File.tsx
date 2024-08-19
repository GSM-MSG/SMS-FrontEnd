import { DetailedHTMLProps, LiHTMLAttributes } from 'react'
import { Button } from '../../atoms'
import * as Icon from '../../icons'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  filename: string
  onClick?: () => void
}

const File = ({ filename, onClick, ...props }: Props) => {
  return (
    <S.File {...props}>
      <S.FileInfo>
        <S.Icon>
          <Icon.File />
        </S.Icon>
        <S.FileName>{filename}</S.FileName>
      </S.FileInfo>

      <Button
        type='button'
        theme='white'
        onClick={onClick}
        style={{ width: 'min-content' }}
      >
        다운로드
      </Button>
    </S.File>
  )
}

export default File
