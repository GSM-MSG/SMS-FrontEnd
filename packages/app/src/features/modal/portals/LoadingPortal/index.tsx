import ReactDOM from 'react-dom'
import { useEffect, useRef, useState } from 'react'
import { LottiePlayer } from 'lottie-web'
import { usePortal } from '@features/modal/hooks'
import * as S from './style'

const LoadingPortal = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [lottie, setLottie] = useState<LottiePlayer | null>(null)
  const portalValue = usePortal()

  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default))
  }, [])

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        // path to your animation file, place it inside public folder
        path: '/lottie/loading.json',
      })

      return () => animation.destroy()
    }
  }, [lottie])

  if (!portalValue) return <></>

  const { portal } = portalValue

  return ReactDOM.createPortal(
    <S.Wrapper>
      <div style={{ width: '100px', height: '100px' }} ref={ref} />
    </S.Wrapper>,
    portal
  )
}

export default LoadingPortal
