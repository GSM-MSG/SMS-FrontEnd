import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactElement,
  cloneElement,
  forwardRef,
  useId,
} from 'react'

import * as S from './style'

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children: ReactElement[]
  id?: undefined
}

export const Root = forwardRef<HTMLInputElement, Props>(
  ({ children, ...props }: Props, ref) => {
    const name = useId()

    return (
      <S.Wrapper>
        {children?.map((i, index) =>
          cloneElement(i, { name, ...props, ref, key: index })
        )}
      </S.Wrapper>
    )
  }
)

Root.displayName = 'SegmentedControl'
