import ReactDOM from 'react-dom'
import Lottie from 'lottie-react'
import * as LoadingData from '@assets/lottie/loading.json'
import { usePortal } from '@features/modal/hooks'
import * as S from './style'

const LoadingPortal = () => {
  const portalValue = usePortal()

  if (!portalValue) return <></>

  const { portal } = portalValue

  return ReactDOM.createPortal(
    <S.Wrapper>
      <Lottie
        animationData={LoadingData}
        width={100}
        height={100}
        loop
        autoplay
      />
    </S.Wrapper>,
    portal
  )
}

export default LoadingPortal
