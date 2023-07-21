interface ProjectType {
  name: string
  icon: string // 프로젝트 아이콘
  previewImages: string[] // 미리보기 이미지 최대 4개
  description: string // 프로젝트 설명 최대 1,000자
  links: ProjectLinkType[] // 관련 링크 최대 10개
  techStacks: string[] // 사용기술 최대 20개
  myActivity: string // 주요 작업 서술 최대 1,000자
  inProgress: ProjectInProgressType
}

interface ProjectLinkType {
  name: string
  url: string
}

interface ProjectInProgressType {
  start: string
  end: string | null // 진행 기간 마지막이 null일시 진행중 인것으로 판별 (null 가능)
}
