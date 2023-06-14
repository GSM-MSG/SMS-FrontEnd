import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Checkbox = forwardRef<HTMLInputElement | null, Props>(
  ({ children, ...props }, ref) => {
    return (
      <S.Wrapper>
        <S.Input type='checkbox' hidden {...props} ref={ref} />
        <S.Checkbox>
          <svg
            viewBox='0 0 11 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 4L4 7L9.6 1'
              stroke='white'
              strokeWidth='2.2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </S.Checkbox>

        {children && <span>{children}</span>}
      </S.Wrapper>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
