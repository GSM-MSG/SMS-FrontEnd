import { TextareaAutosizeProps } from 'react-textarea-autosize'
import { forwardRef } from 'react'
import * as S from './style'

interface Props extends TextareaAutosizeProps {
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ error, ...props }, ref) => {
    return (
      <S.Wrapper>
        <S.TextareaField {...props} ref={ref} />
        {error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
