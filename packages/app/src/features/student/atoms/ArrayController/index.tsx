import { Chip, DeleteButton } from '@sms/shared'
import * as S from './style'

interface Props {
  onAddClick?: () => void
  onRemoveClick?: () => void
  disableAdd?: boolean
  disableRemove?: boolean
}

const ArrayController = ({
  onAddClick,
  onRemoveClick,
  disableAdd,
  disableRemove,
}: Props) => {
  return (
    <S.Wrapper>
      <Chip hidden={disableAdd} onClick={onAddClick}>
        추가
      </Chip>
      <DeleteButton disabled={disableRemove} onClick={onRemoveClick} />
    </S.Wrapper>
  )
}

export default ArrayController
