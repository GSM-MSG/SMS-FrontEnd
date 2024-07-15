import { SEO } from '@features/global'
import GradeScoreTemplate from '@features/teacher/templates/GradeScoreTemplate'

const GradePage = () => {
  return (
    <>
      <SEO title='인증제 채점' />
      <GradeScoreTemplate />
    </>
  )
}

export default GradePage
