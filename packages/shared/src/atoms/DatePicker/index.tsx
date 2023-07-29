import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  useRef,
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

const DatePicker = forwardRef<HTMLInputElement, Props>(
  ({ value, setValue, error, clearError, ...props }, ref) => {
    const [isShow, setIsShow] = useState<boolean>(false)

    const onChange = (value: string) => {
      setValue(value)
      clearError()
    }

    return (
      <S.Wrapper>
        <input {...props} ref={ref} hidden />
        <S.DateInput
          onClick={(e) => {
            e.stopPropagation()
            setIsShow(true)
          }}
        >
          <S.Text>{value || 'yyyy.mm'}</S.Text>
          <Icon.Calendar />
          <Modal
            isShow={isShow}
            value={value}
            onChange={onChange}
            onClose={() => setIsShow(false)}
          />
        </S.DateInput>
        {error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
    )
  }
)

DatePicker.displayName = 'DatePicker'

export default DatePicker
