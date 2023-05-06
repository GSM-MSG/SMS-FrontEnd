import { cloneElement, MouseEvent, ReactElement } from 'react'
import ReactDOM from 'react-dom'
import usePortalSetting from '@features/dialog/hooks/usePortalSetting'
import * as S from './style'

interface Props {
  children: ReactElement
  onClose?: (e: MouseEvent<HTMLDivElement>) => void
}

const Portal = ({ children, onClose }: Props) => {
  const portalSetting = usePortalSetting()

  if (!portalSetting) return <></>

  return ReactDOM.createPortal(
    <S.Wrapper onClick={onClose}>
      {cloneElement(children, { onClick: portalSetting.onClick })}
    </S.Wrapper>,
    portalSetting.portal
  )
}

export default Portal
