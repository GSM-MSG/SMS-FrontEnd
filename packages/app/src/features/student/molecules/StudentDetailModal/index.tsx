import { useModal } from '@features/modal/hooks'
import { BlurPortal } from '@features/modal/portals'
import * as Icon from '@sms/shared/src/icons'
import * as S from './style'

const StudentDetailModal = () => {
  const { onClose } = useModal()

  return (
    <BlurPortal>
      <S.Wrapper>
        <S.ButtonWrapper>
          <S.CloseBtn onClick={onClose}>
            <Icon.XmarkOutline color='white' />
          </S.CloseBtn>
        </S.ButtonWrapper>

        <S.Content>hello</S.Content>
      </S.Wrapper>
    </BlurPortal>
  )
}

export default StudentDetailModal
