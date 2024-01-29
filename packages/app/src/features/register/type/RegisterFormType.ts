interface RegisterFormType {
  major: string
  techStacks: string[]
  profileImgUrl: string
  introduce: string
  stuNum: string
  portfolioUrl: string
  contactEmail: string
  formOfEmployment: FormOfEmployment // 희망 고용 형태
  gsmAuthenticationScore: number // 인증제 점수
  salary: number // 희망 연봉
  regions: string[] // 근무지역
  languageCertificates: LanguageCertificateType[]
  militaryService: MilitaryService // 희망, 비희망, 상관없음, 해당없음
  certificates: string[]
  projects: ProjectType[]
  activities: ActivityType[]
  prizes: PrizeType[]
}

interface PrizeType {
  name: string
  kind: string
  date: string
}

interface LanguageCertificateType {
  languageCertificateName: string
  score: string
}

export default RegisterFormType
