import { UseFormRegisterReturn } from 'react-hook-form'
import { forwardRef, useState } from 'react'
import { Checkbox, MonthPicker } from '../../atoms'
import * as Icon from '../../icons'
import * as S from './style'

interface Props {
  startDateRegister: UseFormRegisterReturn
  endDateRegister: UseFormRegisterReturn
  startDate: string
  endDate: string | null
  onChangeStartDate: (value: string) => void
  onChangeEndDate: (value: string | null) => void
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
    const [inProgress, setInProgress] = useState<boolean>(endDate === null)

    const onChange = () => {
      if (!inProgress) onChangeEndDate(null)
      else onChangeEndDate('')

      clearErrorEndDate()
      setInProgress(!inProgress)
    }

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
            disabled={inProgress}
            value={endDate || ''}
            setValue={onChangeEndDate}
            clearError={clearErrorEndDate}
            position='right'
          />
        </S.Inputs>

        {(startDateError || endDateError) && (
          <S.Errors>
            <S.Error>{startDateError}</S.Error>
            <S.Error>{endDateError}</S.Error>
          </S.Errors>
        )}

        <S.CheckboxWrapper>
          <Checkbox checked={inProgress} onChange={onChange}>
            진행중
          </Checkbox>
        </S.CheckboxWrapper>
      </div>
    )
  }
)

MultiMonthPicker.displayName = 'MultiMonthPicker'

export default MultiMonthPicker
