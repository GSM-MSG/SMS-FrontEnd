import { DetailedHTMLProps, HTMLAttributes } from 'react'

import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLDivElement
  > {}

const Title = ({ ...props }: Props) => {
  return <S.Title {...props} />
}

export default Title
