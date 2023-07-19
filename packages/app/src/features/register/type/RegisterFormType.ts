interface RegisterFormType {
  major: string
  techStack: string[]
  profileImgUrl: string
  introduce: string
  stuNum: string
  portfolioUrl: string
  contactEmail: string
  formOfEmployment: 'FULL_TIME' | 'TEMPORARY' | 'CONSTRACT' | 'INTERN' // 희망 고용 형태
  gsmAuthenticationScore: number // 인증제 점수
  salary: number // 희망 연봉
  region: string[] // 근무지역
  languageCertificate: LanguageCertificateType[]
  dreamBookFileUrl: string // 드림북
  militaryService: 'HOPE' | 'NOT_HOPE' | 'NO_MATTER' | 'NONE' // 희망, 비희망, 상관없음, 해당없음
  certificate: string[]
  projects: ProjectType[]
  prizes: PrizeType[]
}

interface LanguageCertificateType {
  languageCertificateName: string
  score: string
}

export default RegisterFormType
