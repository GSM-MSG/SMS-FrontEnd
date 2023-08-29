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
  position?: 'left' | 'right'
}

const MonthPicker = forwardRef<HTMLInputElement, Props>(
  (
    {
      value,
      setValue,
      error,
      clearError,
      disabled,
      position = 'left',
      ...props
    },
    ref
  ) => {
    const [isShow, setIsShow] = useState<boolean>(false)

    const onChange = (value: string) => {
      setValue(value)
      clearError()
    }

    return (
      <S.Wrapper>
        <input {...props} disabled={disabled} ref={ref} hidden />
        <S.MonthInput
          style={{ cursor: disabled ? 'auto' : 'pointer' }}
          onClick={(e) => {
            if (!isShow) e.stopPropagation()
            setIsShow(true)
          }}
        >
          <S.Text>{value || 'yyyy.mm'}</S.Text>
          <Icon.Calendar />
          {isShow && !disabled && (
            <Modal
              value={value}
              onChange={onChange}
              onClose={() => setIsShow(false)}
              position={position}
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
