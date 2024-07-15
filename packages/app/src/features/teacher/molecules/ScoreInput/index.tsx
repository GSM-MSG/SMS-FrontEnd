import { DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from 'react'
import * as S from './style'
import { Context } from './Context'
import Header from './Header'
import SubmitButtons from './SubmitButtons'
import Content from './Content'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode | ReactNode[]
  defaultHidden?: boolean
  isHidden?: boolean
  onHiddenChange?: (value: boolean) => void
}

const ScoreInput = ({ defaultHidden, children, ...props }: Props) => {
  const [isHidden, setIsHidden] = useState(defaultHidden ?? true)

  const handleHiddenChange = (value: boolean) => {
    if (props.onHiddenChange) props.onHiddenChange(value)
    else setIsHidden(value)
  }

  return (
    <Context.Provider
      value={{
        isHidden: props.isHidden ?? isHidden,
        setIsHidden: handleHiddenChange,
      }}
    >
      <S.Wrapper {...props}>
        <S.Content>{children}</S.Content>
      </S.Wrapper>
    </Context.Provider>
  )
}

ScoreInput.Header = Header
ScoreInput.Content = Content
ScoreInput.SubmitButtons = SubmitButtons

export default ScoreInput
