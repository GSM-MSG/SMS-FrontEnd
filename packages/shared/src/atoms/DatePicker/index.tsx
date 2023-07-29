import { ChangeEvent, useRef, useState } from 'react'
import * as Icon from '../../icons'
import Modal from './Modal'
import * as S from './style'

interface Props {
  error: string
}

const DatePicker = ({ error }: Props) => {
  const [value, setValue] = useState<string>('')

  return (
    <S.Wrapper>
      <input hidden />
      <S.DateInput>
        <S.Text>{value || 'yyyy.mm'}</S.Text>
        <Icon.Calendar />
        <Modal />
      </S.DateInput>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default DatePicker
