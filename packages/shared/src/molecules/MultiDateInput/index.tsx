import { UseFormRegisterReturn } from 'react-hook-form'
import { forwardRef } from 'react'
import DateInput from '../../atoms/DateInput'
import * as Icon from '../../icons'
import * as S from './style'

interface Props {
  startDateRegister: UseFormRegisterReturn
  endDateRegister: UseFormRegisterReturn
  startDateError?: string
  endDateError?: string
  min: string
  max: string
}

const MultiDateInput = forwardRef<HTMLDivElement, Props>(
  (
    {
      startDateRegister,
      endDateRegister,
      startDateError,
      endDateError,
      min,
      max,
    },
    ref
  ) => {
    return (
      <S.Wrapper ref={ref}>
        <DateInput {...startDateRegister} error={startDateError} max={max} />
        <S.IconWrapper>
          <Icon.Tilde />
        </S.IconWrapper>
        <DateInput {...endDateRegister} error={endDateError} min={min} />
      </S.Wrapper>
    )
  }
)

MultiDateInput.displayName = 'MultiDateInput'

export default MultiDateInput
