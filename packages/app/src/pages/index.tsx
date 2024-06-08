import { SEO } from '@features/global'
import StudentsTemplate from '@features/student/templates/StudentsTemplate'

export default function Home() {
  return (
    <>
      <SEO />
      <StudentsTemplate />
    </>
  )
}
