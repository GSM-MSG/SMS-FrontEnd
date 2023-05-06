import { useEffect, useState, MouseEvent } from 'react'

const usePortalSetting = () => {
  const [isCSR, setIsCSR] = useState(false)

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

  if (typeof window === 'undefined' || !isCSR) return null

  const portal = document.getElementById('modal')
  if (!portal) throw new Error('Not found modal')

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return { portal, onClick }
}

export default usePortalSetting
