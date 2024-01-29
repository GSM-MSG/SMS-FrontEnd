import { ReactNode, useState } from 'react'
import * as Icon from '@sms/shared/src/icons'
import { useRouter } from 'next/router'
import * as S from './style'

interface Props {
  onDelete: () => void
  children: ReactNode
  title: string
}

const HideAbleWrapper = ({ children, title, onDelete }: Props) => {
  const router = useRouter()
  const [isChecked, setIsChecked] = useState<boolean>(false)

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>
          {title ||
            (router.pathname === '/mypage'
              ? '프로젝트 제목이 없습니다'
              : '활동 제목이 없습니다')}
        </S.Title>
        <S.Icons>
          <S.Icon>
            <S.HideAnimationInput
              onClick={() => setIsChecked(!isChecked)}
              hidden
              type='checkbox'
            />
            <Icon.ArrowDown />
          </S.Icon>

          <S.Icon onClick={onDelete}>
            <Icon.XMarkOutline />
          </S.Icon>
        </S.Icons>
      </S.Header>

      <S.Content isChecked={isChecked}>{children}</S.Content>
    </S.Wrapper>
  )
}

export default HideAbleWrapper
