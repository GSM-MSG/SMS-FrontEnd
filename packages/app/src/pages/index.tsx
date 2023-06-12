import { useStudent } from '@features/student'

export default function Home() {
  useStudent()

  return <main>Hello world</main>
}
