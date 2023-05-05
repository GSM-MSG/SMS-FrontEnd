import Button from '../Button'
import * as S from './style'

interface Props {
  title: string
  content: string
  cancelText: string
  confirmText: string
}

const Dialog = ({ title, content, cancelText, confirmText }: Props) => (
  <S.Wrapper>
    <div>
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </div>
    <S.Bottom>
      <Button theme='white'>{cancelText}</Button>
      <Button>{confirmText}</Button>
    </S.Bottom>
  </S.Wrapper>
)

export default Dialog
