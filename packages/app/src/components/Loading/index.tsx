import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import * as LoadingData from '@assets/lottie/loading.json'
import * as S from './style'

const Loading = () => {
  const [isCSR, setIsCSR] = useState(false)

  useEffect(() => {
    setIsCSR(true)
  }, [])

  if (typeof window === 'undefined') return <></>
  if (!isCSR) return <></>

  const portal = document.getElementById('loading')
  if (!portal) throw new Error('Not found loading')

  return ReactDOM.createPortal(
    <S.Wrapper>
      <Lottie
        options={{ loop: true, autoplay: true, animationData: LoadingData }}
        width={200}
        height={200}
      />
    </S.Wrapper>,
    portal
  )
}

export default Loading
