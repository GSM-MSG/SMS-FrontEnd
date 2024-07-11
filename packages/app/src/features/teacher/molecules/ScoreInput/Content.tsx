import { DetailedHTMLProps, HTMLAttributes, useContext } from 'react'
import * as S from './style'
import { Context } from './Context'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Content = ({ ...props }: Props) => {
  const { isHidden } = useContext(Context)

  return (
    <S.Content
      style={{ display: isHidden ? 'none' : 'flex', ...props.style }}
      {...props}
    />
  )
}

export default Content
