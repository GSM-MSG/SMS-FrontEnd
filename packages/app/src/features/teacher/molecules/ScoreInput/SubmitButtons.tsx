import { Button } from '@sms/shared'
import { ReactNode, useContext } from 'react'
import * as S from './style'
import { Context } from './Context'

interface Props {
  children?: ReactNode | ReactNode[]
  onPrev?: () => void
  onNext?: () => void
}

const SubmitButtons = ({ children, onPrev, onNext }: Props) => {
  const { isHidden } = useContext(Context)

  return (
    <S.SubmitButtons style={{ display: isHidden ? 'none' : 'flex' }}>
      {children ? (
        children
      ) : (
        <>
          <Button type='button' theme='white' onClick={onPrev}>
            이전
          </Button>
          <Button type='button' onClick={onNext}>
            다음
          </Button>
        </>
      )}
    </S.SubmitButtons>
  )
}

export default SubmitButtons
