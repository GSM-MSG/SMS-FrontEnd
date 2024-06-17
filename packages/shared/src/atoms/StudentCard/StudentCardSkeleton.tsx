import { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react'
import { SkeletonContent, SkeletonText } from '../Skeleton'
import * as S from './style'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const StudentCardSkeleton = forwardRef<HTMLDivElement, Props>(
  ({ ...props }, ref) => {
    return (
      <S.Wrapper ref={ref} {...props}>
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
)

StudentCardSkeleton.displayName = 'StudentCardSkeleton'

export default StudentCardSkeleton
