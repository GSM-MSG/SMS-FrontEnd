import React from 'react'
import createShareProfilService from '@features/student/service/createShareProfilService'
import * as S from './style'

interface Props {
  isLinkCreated: boolean
  setIsLinkCreated: (value: boolean) => void
  periodDay: number
  toggleModal: () => void
  studentId?: string
  setProfileShareData: React.Dispatch<React.SetStateAction<ProfileShareData[]>>
}

interface ProfileShareData {
  token: string
}

const ProfileShareModalFooter = ({
  isLinkCreated,
  setIsLinkCreated,
  periodDay,
  toggleModal,
  studentId,
  setProfileShareData,
}: Props) => {
  const handleCreateLinkButtonClick = async () => {
    if (isLinkCreated) {
      toggleModal()
    } else {
      setIsLinkCreated(true)
      const res = await createShareProfilService(periodDay, studentId)
      if (res) {
        setProfileShareData([res]) // 배열로 설정
      }
    }
  }

  const buttonText = isLinkCreated ? '확인' : '링크 생성'
  const beforeText = !isLinkCreated && (
    <S.BeforeText onClick={toggleModal}>이전으로</S.BeforeText>
  )

  return (
    <S.FooterContainer>
      <S.ButtonContainr>
        {beforeText}
        <S.CreateLinkButton onClick={handleCreateLinkButtonClick}>
          {buttonText}
        </S.CreateLinkButton>
      </S.ButtonContainr>
    </S.FooterContainer>
  )
}

export default ProfileShareModalFooter
