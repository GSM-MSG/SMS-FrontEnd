import * as Icon from '@sms/shared/src/icons'
import * as S from './style'

interface Props {
  projects?: ProjectType[]
}

const ProjectDetail = ({ projects }: Props) => {
  if (!projects?.length) return null

  return (
    <S.Wrapper>
      <S.Title>프로젝트</S.Title>

      {projects.map((project, idx) => (
        <S.Project key={idx}>
          <S.ProjectInfo>
            <S.ProjectIcon
              src={project.icon}
              alt={`${project.name} project icon`}
            />
            <div>
              <S.SubTitle>{project.name}</S.SubTitle>
              <S.ProjectDate>
                {project.inProgress.start} ~{' '}
                {project.inProgress.end || '진행중'}
              </S.ProjectDate>
            </div>
          </S.ProjectInfo>
          <S.Images>
            {project.previewImages.map((image, idx) => (
              <S.Image
                key={idx}
                src={image}
                alt={`project preview image ${idx}`}
              />
            ))}
          </S.Images>

          <S.Section>
            <S.SubTitle>사용기술</S.SubTitle>
            <S.Stacks>
              {project.techStacks.map((stack) => (
                <S.Stack key={stack}>{stack}</S.Stack>
              ))}
            </S.Stacks>
          </S.Section>

          <S.Section>
            <S.SubTitle>프로젝트 설명</S.SubTitle>
            <S.ProjectDescription>{project.description}</S.ProjectDescription>
          </S.Section>

          <S.Section>
            <S.SubTitle>주요 작업 서술</S.SubTitle>
            <S.ProjectDescription>{project.myActivity}</S.ProjectDescription>
          </S.Section>

          <S.Section>
            <S.SubTitle>관련 링크</S.SubTitle>

            {project.links.map(({ name, url }, idx) => (
              <S.LinkWrapper key={idx} href={url} target='_blank'>
                <S.LinkTitle>{name}</S.LinkTitle>
                <S.IconWrapper>
                  <Icon.ArrowUpRight color='var(--N30)' />
                </S.IconWrapper>
                <S.LinkUrl>{url}</S.LinkUrl>
              </S.LinkWrapper>
            ))}
          </S.Section>
        </S.Project>
      ))}
    </S.Wrapper>
  )
}

export default ProjectDetail
