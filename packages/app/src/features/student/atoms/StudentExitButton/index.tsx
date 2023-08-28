import useWithdraw from '@features/auth/hook/useWithdraw'
import * as S from './style'

const StudentExitButton = () => {
  const { onWithdraw } = useWithdraw()

  return (
    <S.Wrapper>
      <S.Comment>계정을 비활성화 하시겠습니까?</S.Comment>
      <S.ExitButton onClick={onWithdraw}>회원탈퇴</S.ExitButton>
    </S.Wrapper>
  )
}

export default StudentExitButton
