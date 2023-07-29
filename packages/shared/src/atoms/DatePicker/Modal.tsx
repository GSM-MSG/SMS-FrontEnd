import { useState } from 'react'
import * as Icon from '../../icons'
import Button from '../Button'
import * as S from './style'

const Modal = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear())
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1)

  const onNextYear = () => setYear(year + 1)
  const onPrevYear = () => setYear(year - 1)

  return (
    <S.Modal>
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

      <S.DateList>
        {Array(...Array(12)).map((_, idx) => (
          <label key={idx} onClick={() => setMonth(idx + 1)}>
            <S.DateButtonInput
              checked={month === idx + 1}
              readOnly
              hidden
              type='checkbox'
            />
            <S.DateButton>{idx + 1}</S.DateButton>
          </label>
        ))}
      </S.DateList>

      <S.ButtonWrapper>
        <Button>취소</Button>
        <Button theme='white'>확인</Button>
      </S.ButtonWrapper>
    </S.Modal>
  )
}

export default Modal
