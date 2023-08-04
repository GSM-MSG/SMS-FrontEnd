import { useModal } from '@features/modal/hooks'
import { BlurPortal } from '@features/modal/portals'
import ProfileDetail from '@features/student/atoms/ProfileDetail'
import StudentInfo from '@features/student/atoms/StudentInfo'
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

        <S.Content>
          <ProfileDetail />
          <StudentInfo />
        </S.Content>
      </S.Wrapper>
    </BlurPortal>
  )
}

export default StudentDetailModal
