import { StudentList, useStudent } from '@features/student'

export default function Home() {
  const { data } = useStudent()

  return (
    <main>
      <StudentList students={data?.content} max={data?.totalSize || 0} />
    </main>
  )
}
