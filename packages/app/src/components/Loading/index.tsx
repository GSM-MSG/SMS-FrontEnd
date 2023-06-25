import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import * as LoadingData from '@assets/lottie/loading.json'
import * as S from './style'

interface Props {
  isShow: boolean
}

const Loading = ({ isShow }: Props) => {
  const [isCSR, setIsCSR] = useState(false)

  useEffect(() => {
    setIsCSR(true)
  }, [])

  if (typeof window === 'undefined' || !isCSR || !isShow) return <></>

  const portal = document.getElementById('loading')
  if (!portal) throw new Error('Not found loading')

  return ReactDOM.createPortal(
    <S.Wrapper>
      <Lottie
        options={{ loop: true, autoplay: true, animationData: LoadingData }}
        width={100}
        height={100}
      />
    </S.Wrapper>,
    portal
  )
}

export default Loading
