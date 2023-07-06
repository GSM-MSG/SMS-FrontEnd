import { RootState } from '@store'
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import useStudent from './useStudent'

const useScrollObserver = () => {
  const observe = useRef<HTMLDivElement>(null)
  const { studentParam } = useSelector((state: RootState) => ({
    studentParam: state.studentParam,
  }))
  const { refetchStudents } = useStudent()

  useEffect(() => {
    if (!observe.current || studentParam.isError || !studentParam.isReady)
      return

    const observer = new IntersectionObserver(
      (e) => {
        if (
          !e[0].isIntersecting ||
          studentParam.nextStop ||
          studentParam.isLoading
        )
          return

        refetchStudents({
          page: studentParam.page,
          size: studentParam.size,
          ...studentParam.param,
        })
      },
      { threshold: 0 }
    )
    observer.observe(observe.current)

    return () => observer.disconnect()
  }, [
    observe.current,
    studentParam.nextStop,
    studentParam.isLoading,
    studentParam.isReady,
  ])

  return { observe }
}

export default useScrollObserver
