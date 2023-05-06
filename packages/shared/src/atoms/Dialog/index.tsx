import { Emitter } from '../../lib'
import Button from '../Button'
import * as S from './style'

interface Props {
  title: string
  content: string
  cancelText: string
  confirmText: string
  emitter: Emitter
  onClose(): void
}

const Dialog = ({
  title,
  content,
  cancelText,
  confirmText,
  emitter,
  onClose,
}: Props) => {
  const eventName = 'dialog'

  const onClick = (data: boolean) => {
    emitter.emit(eventName, data)
    onClose()
  }

  return (
    <S.Wrapper onClick={(e) => e.stopPropagation()}>
      <div>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
      </div>
      <S.Bottom>
        <Button onClick={() => onClick(false)} theme='white'>
          {cancelText}
        </Button>
        <Button onClick={() => onClick(true)}>{confirmText}</Button>
      </S.Bottom>
    </S.Wrapper>
  )
}

export default Dialog
