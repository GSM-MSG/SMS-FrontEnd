import { SEO } from '@features/global'
import { actions } from '@features/student/stores'
import StudentsTemplate from '@features/student/templates/StudentsTemplate'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Home() {
  const { query } = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    if (Object.keys(query).length === 0) return
    dispatch(actions.setParam(query))
  }, [query])

  return (
    <>
      <SEO />
      <StudentsTemplate />
    </>
  )
}
