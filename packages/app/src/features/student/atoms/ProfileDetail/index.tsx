import { useState } from 'react'
import * as SVG from '@sms/shared/src/assets/svg'
import * as S from './style'

interface Props {
  major?: string
  name?: string
  grade?: number
  classNum?: number
  number?: number
  techStack?: string[]
  introduce?: string
  profileImgUrl?: string
}

const ProfileDetail = ({
  major,
  name,
  grade,
  number,
  profileImgUrl,
  classNum,
  introduce,
  techStack,
}: Props) => {
  const [isError, setIsError] = useState<boolean>(false)

  return (
    <S.Wrapper>
      <S.Left>
        <S.Major>{major}</S.Major>

        <S.Name>{name?.replace('**', '소금')}</S.Name>

        {grade && classNum && number && (
          <S.SchoolInfo>
            {grade}학년 {classNum}반 {number}번 • 소프트웨어 개발과
          </S.SchoolInfo>
        )}

        <S.Tags>
          {techStack?.map((stack, idx) => (
            <S.Tag key={idx}>{stack}</S.Tag>
          ))}
        </S.Tags>

        <S.Introduce>
          <S.IntroduceLabel>자기소개</S.IntroduceLabel>
          {introduce}
        </S.Introduce>
      </S.Left>

      <S.Right>
        {!isError && profileImgUrl ? (
          <S.ProfileImage
            src={profileImgUrl}
            alt='profile image'
            onError={() => setIsError(true)}
          />
        ) : (
          <S.TemeporaryImage>
            <SVG.Person />
          </S.TemeporaryImage>
        )}
      </S.Right>
    </S.Wrapper>
  )
}

export default ProfileDetail
