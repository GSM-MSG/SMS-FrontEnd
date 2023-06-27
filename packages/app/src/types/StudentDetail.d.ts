type MilitaryService = 'HOPE' | 'NOT_HOPE' | 'NO_MATTER' | 'NONE'

interface LanguageCertificates {
  languageCertificateName: string
  score: string
}

interface StudentDetail {
  name: string
  introduce: string
  dreamBookFileUrl?: string
  portfolioUrl?: string // null 가능
  grade?: number
  classNum?: number
  number?: number
  department?: Department
  major: string
  profileImg?: string
  contactEmail?: string
  gsmAuthenticationScore?: number
  formOfEmployment?: FormOfEmployment
  regions?: string[]
  militaryService?: MilitaryService
  salary?: number
  languageCertificates?: LanguageCertificates[]
  certificates?: string[]
  techStack: string[]
}
