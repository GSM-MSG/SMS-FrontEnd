import * as Icon from '@sms/shared/src/icons'
import * as S from './style'

const ProjectDetail = () => {
  return (
    <S.Wrapper>
      <S.Title>프로젝트</S.Title>
      <S.Project>
        <S.ProjectInfo>
          <S.ProjectIcon />
          <div>
            <S.SubTitle>SMS</S.SubTitle>
            <S.ProjectDate>2022.01 ~ 2023.03</S.ProjectDate>
          </div>
        </S.ProjectInfo>
        <S.Images>
          <S.Image src='https://rb.gy/885jc' alt='' />
          <S.Image src='https://rb.gy/885jc' alt='' />
          <S.Image src='https://rb.gy/885jc' alt='' />
          <S.Image src='https://rb.gy/885jc' alt='' />
        </S.Images>

        <S.Section>
          <S.SubTitle>사용기술</S.SubTitle>
          <S.Stacks>
            <S.Stack>Figma</S.Stack>
          </S.Stacks>
        </S.Section>

        <S.Section>
          <S.SubTitle>주요 작업 서술</S.SubTitle>
          <S.ProjectDescription>
            저는 학교에서 자습 신청, 안마의자 급식 조회, 공지사항 등을 관리해
            주는 서비스인 DOTORI를 버전 2로 업데이트하기 위해 웹사이트
            리디자인을 혼자 맡아 진행하게 되었습니다. 기존의 도토리 서비스가 UX
            적으로 칭찬을 받았던 만큼, 기존 형태를 최대한 유지하면서 UI를
            개선하는 방향으로 진행하였습니다. 평면적인 디자인에서 입체적인
            느낌이 나도록 3D 모델링을 직접 하여 서비스 무드에 어울리도록
            디자인하였습니다. 또한 요즘 유행하는 툴인 Spline을 활용하여 3D
            프로모션도 제작하였습니다. 그리고 기존 도토리 서비스에서 되지 않던
            페이지 반응형을 도입하여 사용하자 더 다양한 해상도에서 원활하게
            서비스를 사용하도록 하였습니다. 이를 통해 기존 또는 새로운 도토리
            서비스 사용자들이 더 편하게 도토리를 사용할 수 있게 되었습니다.
          </S.ProjectDescription>
        </S.Section>

        <S.Section>
          <S.SubTitle>관련 링크</S.SubTitle>

          <S.LinkWrapper href='https://youtube.com' target='_blank'>
            <S.LinkTitle>Youtube</S.LinkTitle>
            <S.IconWrapper>
              <Icon.ArrowUpRight color='var(--N30)' />
            </S.IconWrapper>
            <S.LinkUrl>https://hello.com</S.LinkUrl>
          </S.LinkWrapper>
        </S.Section>
      </S.Project>
    </S.Wrapper>
  )
}

export default ProjectDetail
