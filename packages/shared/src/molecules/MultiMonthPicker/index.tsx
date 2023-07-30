import { UseFormRegisterReturn } from 'react-hook-form'
import { forwardRef } from 'react'
import { MonthPicker } from '../../atoms'
import * as Icon from '../../icons'
import * as S from './style'

interface Props {
  startDateRegister: UseFormRegisterReturn
  endDateRegister: UseFormRegisterReturn
  startDate: string
  endDate: string | null
  onChangeStartDate: (value: string) => void
  onChangeEndDate: (value: string) => void
  startDateError?: string
  endDateError?: string
  clearErrorStartDate: () => void
  clearErrorEndDate: () => void
}

const MultiMonthPicker = forwardRef<HTMLDivElement, Props>(
  (
    {
      startDateRegister,
      endDateRegister,
      startDate,
      endDate,
      onChangeEndDate,
      onChangeStartDate,
      startDateError,
      endDateError,
      clearErrorStartDate,
      clearErrorEndDate,
    },
    ref
  ) => {
    return (
      <div ref={ref}>
        <S.Inputs>
          <MonthPicker
            {...startDateRegister}
            value={startDate}
            setValue={onChangeStartDate}
            clearError={clearErrorStartDate}
          />
          <S.IconWrapper>
            <Icon.Tilde />
          </S.IconWrapper>
          <MonthPicker
            {...endDateRegister}
            value={endDate || ''}
            setValue={onChangeEndDate}
            clearError={clearErrorEndDate}
          />
        </S.Inputs>

        {(startDateError || endDateError) && (
          <S.Errors>
            <S.Error>{startDateError}</S.Error>
            <S.Error>{endDateError}</S.Error>
          </S.Errors>
        )}
      </div>
    )
  }
)

MultiMonthPicker.displayName = 'MultiMonthPicker'

export default MultiMonthPicker
