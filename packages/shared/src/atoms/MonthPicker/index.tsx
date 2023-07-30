import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react'
import * as Icon from '../../icons'
import Modal from './Modal'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string
  setValue: (value: string) => void
  clearError: () => void
  error?: string
}

const MonthPicker = forwardRef<HTMLInputElement, Props>(
  ({ value, setValue, error, clearError, ...props }, ref) => {
    const [isShow, setIsShow] = useState<boolean>(false)

    const onChange = (value: string) => {
      setValue(value)
      clearError()
    }

    return (
      <S.Wrapper>
        <input {...props} ref={ref} hidden />
        <S.MonthInput
          onClick={(e) => {
            e.stopPropagation()
            setIsShow(true)
          }}
        >
          <S.Text>{value || 'yyyy.mm'}</S.Text>
          <Icon.Calendar />
          {isShow && (
            <Modal
              value={value}
              onChange={onChange}
              onClose={() => setIsShow(false)}
            />
          )}
        </S.MonthInput>
        {error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
    )
  }
)

MonthPicker.displayName = 'MonthPicker'

export default MonthPicker
