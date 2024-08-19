import React from 'react'
import * as S from './style'

interface Props {
  isLinkCreated: boolean
}

const ProfileShareModalHeader = ({ isLinkCreated }: Props) => {
  const modalHeaderTitle = isLinkCreated ? '링크 복사' : '만료 시간 선택'

  return (
    <S.ModalHeaderContainer>
      <S.ModalHeaderTitle>{modalHeaderTitle}</S.ModalHeaderTitle>
    </S.ModalHeaderContainer>
  )
}

export default ProfileShareModalHeader
