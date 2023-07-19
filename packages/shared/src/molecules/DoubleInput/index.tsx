import { UseFormRegisterReturn } from 'react-hook-form'

import { Input, DeleteButton } from '../../atoms'
import * as S from './style'

interface Props {
  titleRegister: UseFormRegisterReturn
  contentRegister: UseFormRegisterReturn
  titlePlaceholder: string
  contentPlaceholder: string
  onDelete?: () => void
}

const DoubleInput = ({
  titleRegister,
  contentRegister,
  titlePlaceholder,
  contentPlaceholder,
  onDelete,
}: Props) => {
  return (
    <S.Wrapper>
      <S.Inputs>
        <Input {...titleRegister} placeholder={titlePlaceholder} />
        <Input {...contentRegister} placeholder={contentPlaceholder} />
      </S.Inputs>

      {onDelete && <DeleteButton onClick={onDelete} />}
    </S.Wrapper>
  )
}

export default DoubleInput
