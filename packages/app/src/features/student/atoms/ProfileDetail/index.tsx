import Image from 'next/image'
import * as SVG from '@sms/shared/src/assets/svg'
import * as S from './style'

interface Props {
  major?: string
  name?: string
  grade?: number
  classNum?: number
  number?: number
  techStacks?: string[]
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
  techStacks,
}: Props) => {
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
          {techStacks?.map((stack, idx) => (
            <S.Tag key={idx}>{stack}</S.Tag>
          ))}
        </S.Tags>

        <S.Introduce>
          <S.IntroduceLabel>자기소개</S.IntroduceLabel>
          {introduce}
        </S.Introduce>
      </S.Left>

      <S.Right>
        {profileImgUrl ? (
          <S.ProfileImage>
            <Image
              src={profileImgUrl}
              alt='profile image'
              fill
              priority
              sizes='100%'
              style={{ objectFit: 'cover' }}
            />
          </S.ProfileImage>
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
