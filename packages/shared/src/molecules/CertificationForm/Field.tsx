import { DetailedHTMLProps, HTMLAttributes, ReactNode, useContext } from 'react'
import * as S from './style'
import { Context } from './Context'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  label?: string
  children: ReactNode
}

const Field = ({ label, children, ...props }: Props) => {
  const { hidden } = useContext(Context)

  return (
    <S.Field
      style={{
        display: hidden ? 'none' : 'grid',
        ...props.style,
      }}
      {...props}
    >
      <S.Label>{label}</S.Label>
      {children}
    </S.Field>
  )
}

export default Field
