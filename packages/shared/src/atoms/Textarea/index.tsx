import { TextareaAutosizeProps } from 'react-textarea-autosize'
import * as S from './style'

interface Props extends TextareaAutosizeProps {
  error?: string
}

const Textarea = ({ error, ...props }: Props) => {
  return (
    <S.Wrapper>
      <S.TextareaField {...props} />
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Textarea
