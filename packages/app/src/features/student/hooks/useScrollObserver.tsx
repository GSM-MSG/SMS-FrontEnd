import { useEffect, useRef } from 'react'

type Callback = () => void | Promise<void>

interface Props {
  callback: Callback
  threshold?: number
}

const useScrollObserver = ({ callback, threshold = 0.1 }: Props) => {
  const element = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!element.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) await callback()
        })
      },
      {
        threshold,
      }
    )

    observer.observe(element.current)

    return () => observer.disconnect()
  }, [element, callback])

  return { element }
}

export default useScrollObserver
