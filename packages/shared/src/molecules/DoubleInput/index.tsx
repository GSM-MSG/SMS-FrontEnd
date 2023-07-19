import { UseFormRegisterReturn } from 'react-hook-form'

import { Input, DeleteButton } from '../../atoms'
import * as S from './style'

interface Props {
  titleRegister: UseFormRegisterReturn
  contentRegister: UseFormRegisterReturn
  titleError?: string
  contentError?: string
  titlePlaceholder: string
  contentPlaceholder: string
  onDelete?: () => void
}

const DoubleInput = ({
  titleRegister,
  contentRegister,
  titleError,
  contentError,
  titlePlaceholder,
  contentPlaceholder,
  onDelete,
}: Props) => {
  return (
    <S.Wrapper>
      <S.Inputs>
        <Input
          {...titleRegister}
          error={titleError}
          placeholder={titlePlaceholder}
        />
        <Input
          {...contentRegister}
          error={contentError}
          placeholder={contentPlaceholder}
        />
      </S.Inputs>

      {onDelete && <DeleteButton onClick={onDelete} />}
    </S.Wrapper>
  )
}

export default DoubleInput
