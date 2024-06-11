import React, { useState } from 'react'
import ProfileShareModalHeader from '@features/student/atoms/ProfileShareModalHeader'
import ProfileShareModalSection from '@features/student/atoms/ProfileShareModalSection'
import ProfileShareModalFooter from '@features/student/atoms/ProfileShareModalFooter'
import * as S from './style'

interface Props {
  toggleModal: () => void
  studentId: string
}

interface ProfileShareData {
  token: string
}

const ProfileSharingModal = ({ toggleModal, studentId }: Props) => {
  const [periodDay, setPeriodDay] = useState<number>(5)
  const [isLinkCreated, setIsLinkCreated] = useState(false)
  const [profileShareData, setProfileShareData] = useState<ProfileShareData[]>(
    []
  )
  const handleBackgroundClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    toggleModal()
  }

  const handleBackgroundClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    toggleModal()
  }

  return (
    <S.ModalBackground onClick={handleBackgroundClick}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.ModalContainerResponce>
          <S.ModalMainContainer>
            <ProfileShareModalHeader isLinkCreated={isLinkCreated} />
            <ProfileShareModalSection
              isLinkCreated={isLinkCreated}
              periodDay={periodDay}
              setPeriodDay={setPeriodDay}
              profileShareData={profileShareData}
            />
          </S.ModalMainContainer>
          <ProfileShareModalFooter
            isLinkCreated={isLinkCreated}
            setIsLinkCreated={setIsLinkCreated}
            periodDay={periodDay}
            toggleModal={toggleModal}
            studentId={studentId}
            setProfileShareData={setProfileShareData}
          />
        </S.ModalContainerResponce>
      </S.ModalContainer>
    </S.ModalBackground>
  )
}

export default ProfileSharingModal
