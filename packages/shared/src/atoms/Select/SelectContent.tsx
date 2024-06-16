import { ReactElement, cloneElement, useContext, useId } from 'react'
import { Context } from './Context'
import * as S from './style'

interface Props {
  children: ReactElement | ReactElement[]
}

export const SelectContent = ({ children }: Props) => {
  const { open, name } = useContext(Context)
  const innerName = useId()

  return (
    <S.SelectContent
      style={{
        display: open ? 'flex' : 'none',
      }}
    >
      {Array.isArray(children)
        ? children.map((i, key) =>
            cloneElement(i, { name: name ? name : innerName, key })
          )
        : cloneElement(children, { name })}
    </S.SelectContent>
  )
}
