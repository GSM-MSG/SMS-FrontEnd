import { useEffect, useState, MouseEvent } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { close } from '@store/modalSlice'

const usePortal = () => {
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
    router.push('/', '/')
    dispatch(close())
  }

  return {
    onClick,
    onClose,
    portal,
  }
}

export default usePortal
