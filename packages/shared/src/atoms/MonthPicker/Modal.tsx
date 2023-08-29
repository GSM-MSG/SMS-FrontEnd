import { useEffect, useMemo, useState } from 'react'
import * as Icon from '../../icons'
import Button from '../Button'
import * as S from './style'

interface Props {
  value: string
  onChange: (value: string) => void
  onClose: () => void
  position?: 'left' | 'right'
}

const Modal = ({ value, onChange, onClose, position = 'left' }: Props) => {
  const date = useMemo(() => {
    return value ? new Date(value) : new Date()
  }, [value])

  const [year, setYear] = useState<number>(date.getFullYear())
  const [month, setMonth] = useState<number>(date.getMonth() + 1)

  const onNextYear = () => setYear(year + 1)
  const onPrevYear = () => setYear(year - 1)

  const onSubmit = () => {
    onChange(`${year}-${month < 10 ? `0${month}` : month}`)
    onClose()
  }

  useEffect(() => {
    document.addEventListener('click', onClose, { passive: true })

    return () => document.removeEventListener('click', onClose)
  }, [])

  return (
    <S.Modal style={{ [position]: '0' }} onClick={(e) => e.stopPropagation()}>
      <S.ModalTitle>
        <S.ArrowIcon
          onClick={onPrevYear}
          style={{ transform: 'rotate(90deg)' }}
        >
          <Icon.ArrowDown />
        </S.ArrowIcon>

        <S.Title>{year}</S.Title>

        <S.ArrowIcon
          onClick={onNextYear}
          style={{ transform: 'rotate(-90deg)' }}
        >
          <Icon.ArrowDown />
        </S.ArrowIcon>
      </S.ModalTitle>

      <S.MonthList>
        {Array(...Array(12)).map((_, idx) => (
          <label key={idx} onClick={() => setMonth(idx + 1)}>
            <S.DateButtonInput
              checked={month === idx + 1}
              readOnly
              hidden
              type='checkbox'
            />
            <S.MonthButton>{idx + 1}</S.MonthButton>
          </label>
        ))}
      </S.MonthList>

      <S.ButtonWrapper>
        <Button theme='white' onClick={onClose}>
          취소
        </Button>
        <Button onClick={onSubmit}>확인</Button>
      </S.ButtonWrapper>
    </S.Modal>
  )
}

export default Modal
