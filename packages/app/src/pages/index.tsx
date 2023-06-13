import { SEO } from '@components'
import { useStudent } from '@features/student'
import StudentsTemplate from '@features/student/templates/StudentsTemplate'

export default function Home() {
  const { data } = useStudent()

  return (
    <>
      <SEO />
      <StudentsTemplate students={data?.content} max={data?.totalSize || 0} />
    </>
  )
}
