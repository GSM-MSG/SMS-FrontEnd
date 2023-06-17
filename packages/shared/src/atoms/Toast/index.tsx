import * as Icon from '../../icons'
import * as S from './style'

interface Props {
  comment: string
  type: 'error' | 'success'
}

const Toast = ({ comment, type }: Props) => {
  return (
    <S.Wrapper type={type}>
      {type === 'success' ? (
        <Icon.Check color='var(--POSITIVE)' background='var(--WHITE)' />
      ) : (
        <Icon.ExclamationMark color='var(--ERROR)' background='var(--WHITE)' />
      )}
      <S.Comment>{comment}</S.Comment>
    </S.Wrapper>
  )
}

export default Toast
