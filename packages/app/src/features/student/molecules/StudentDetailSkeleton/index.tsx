import { SkeletonContent, SkeletonText } from '@sms/shared'
import * as S from './style'

const StudentDetailSkeleton = () => {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.Left>
          <S.Major>
            <SkeletonText width='2rem' />
          </S.Major>
          <S.Name>
            <SkeletonText width='5rem' height='1.75rem' />
          </S.Name>
          <S.Tags>
            <SkeletonText width='3rem' height='1.5rem' />
            <SkeletonText width='5rem' height='1.5rem' />
            <SkeletonText width='4em' height='1.5rem' />
          </S.Tags>
          <SkeletonText height='3.5rem' marginBottom='1rem' />
        </S.Left>
        <S.Right>
          <S.ProfileImage>
            <SkeletonContent />
          </S.ProfileImage>
        </S.Right>
      </S.ProfileWrapper>
    </S.Wrapper>
  )
}

export default StudentDetailSkeleton
