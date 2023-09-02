import { SkeletonContent, SkeletonText } from '../Skeleton'
import * as S from './style'

const StudentCardSkeleton = () => {
  return (
    <S.Wrapper>
      <S.ProfileBackground>
        <SkeletonContent />
      </S.ProfileBackground>

      <S.UserInfo>
        <div>
          <S.Name>
            <SkeletonText width='40%' />
          </S.Name>
          <S.Stack>
            <SkeletonText width='20%' />
          </S.Stack>
        </div>

        <S.Tags>
          <SkeletonText width='20%' />
          <SkeletonText width='20%' />
          <SkeletonText width='30%' />
          <SkeletonText width='30%' />
          <SkeletonText width='20%' />
          <SkeletonText width='20%' />
        </S.Tags>
      </S.UserInfo>
    </S.Wrapper>
  )
}

export default StudentCardSkeleton
