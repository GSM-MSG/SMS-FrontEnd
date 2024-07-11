import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  description?: ReactNode
}

const DescriptionWrapper = ({ description, children, ...props }: Props) => {
  return (
    <div {...props}>
      {children}
      {description && <S.Description>{description}</S.Description>}
    </div>
  )
}

export default DescriptionWrapper
