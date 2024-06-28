import { Chip, DeleteButton } from '@sms/shared'
import * as S from './style'

interface Props {
  onAddClick?: () => void
  onRemoveClick?: () => void
  disableAdd?: boolean
}

const ArrayController = ({ onAddClick, onRemoveClick, disableAdd }: Props) => {
  return (
    <S.Wrapper>
      <Chip
        disabled={disableAdd}
        style={{ opacity: disableAdd ? 0 : undefined }}
        onClick={onAddClick}
      >
        추가
      </Chip>
      <DeleteButton type='button' onClick={onRemoveClick} />
    </S.Wrapper>
  )
}

export default ArrayController
