import { ReactNode, useContext } from 'react'
import * as Icon from '../../icons'
import { Context } from './Context'
import * as S from './style'

interface Props {
  children: ReactNode
}

export const SelectTrigger = ({ children }: Props) => {
  const { open, onOpenChange } = useContext(Context)

  const onClick = () => {
    onOpenChange(!open)
  }

  return (
    <S.SelectTrigger onClick={onClick} tabIndex={0}>
      {children}
      <Icon.ArrowDown />
    </S.SelectTrigger>
  )
}
