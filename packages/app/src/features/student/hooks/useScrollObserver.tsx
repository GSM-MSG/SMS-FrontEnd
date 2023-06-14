import { RootState } from '@store'
import { nextPage } from '@store/studentParamSlice'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useScrollObserver = () => {
  const observe = useRef<HTMLDivElement>(null)
  const { studentParam } = useSelector((state: RootState) => ({
    studentParam: state.studentParam,
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    if (!observe.current) return

    const observer = new IntersectionObserver(
      (e) => {
        if (
          !e[0].isIntersecting ||
          studentParam.nextStop ||
          studentParam.isLoading
        )
          return

        dispatch(nextPage())
      },
      { threshold: 0 }
    )
    observer.observe(observe.current)

    return () => observer.disconnect()
  }, [observe.current, studentParam.nextStop, studentParam.isLoading])

  return { observe }
}

export default useScrollObserver
