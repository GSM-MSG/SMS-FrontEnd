import { useEffect, useState, MouseEvent } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { actions } from '@features/modal/stores'

const usePortal = (toRedirect?: boolean) => {
  const router = useRouter()
  const [isCSR, setIsCSR] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setIsCSR(true)
  }, [])

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      width: 100%;`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = ''
      window.scrollTo(0, -parseInt(scrollY))
    }
  }, [])

  if (typeof window === 'undefined') return null
  if (!isCSR) return null

  const portal = document.getElementById('modal')
  if (!portal) throw new Error('Not found modal')

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const onClose = () => {
    if (toRedirect) router.push('/', '/', { scroll: false })
    dispatch(actions.close())
  }

  return {
    onClick,
    onClose,
    portal,
  }
}

export default usePortal
