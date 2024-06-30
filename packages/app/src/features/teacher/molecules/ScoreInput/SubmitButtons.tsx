import { Button } from '@sms/shared'
import { ReactNode, useContext } from 'react'
import * as S from './style'
import { Context } from './Context'

interface Props {
  children?: ReactNode | ReactNode[]
  onReject?: () => void
  onAccept?: () => void
}

const SubmitButtons = ({ children, onReject, onAccept }: Props) => {
  const { isHidden } = useContext(Context)

  return (
    <S.SubmitButtons style={{ display: isHidden ? 'none' : 'flex' }}>
      {children ? (
        children
      ) : (
        <>
          <Button type='button' theme='white' onClick={onReject}>
            반려
          </Button>
          <Button type='button' onClick={onAccept}>
            승인
          </Button>
        </>
      )}
    </S.SubmitButtons>
  )
}

export default SubmitButtons
