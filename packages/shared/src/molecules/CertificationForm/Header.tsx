import { DetailedHTMLProps, HTMLAttributes, useContext } from 'react'
import * as Icon from '../../icons'
import * as S from './style'
import { Context } from './Context'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  toggle?: boolean
  onClose?: () => void
}

const Header = ({ children, toggle, onClose, ...props }: Props) => {
  const { hidden, setHidden } = useContext(Context)

  const onClick = () => {
    setHidden(!hidden)
  }

  return (
    <S.Header {...props}>
      {children}

      <S.Icons>
        <S.Icon
          hidden={toggle}
          onClick={onClick}
          style={{
            transform: hidden ? 'rotate(90deg)' : undefined,
          }}
        >
          <Icon.ArrowDown />
        </S.Icon>

        {onClose && (
          <S.Icon onClick={onClose}>
            <Icon.XMarkOutline />
          </S.Icon>
        )}
      </S.Icons>
    </S.Header>
  )
}

export default Header
