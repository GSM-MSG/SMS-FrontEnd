import { Radio } from '@sms/shared'
import { useRef } from 'react'
import * as S from './style'

interface ProfileShareData {
  token: string
}

interface Props {
  isLinkCreated: boolean
  setPeriodDay: React.Dispatch<React.SetStateAction<number>>
  periodDay: number
  profileShareData: ProfileShareData[]
}

const expirationOptions = [
  { value: '5', label: '5일' },
  { value: '10', label: '10일' },
  { value: '15', label: '15일' },
  { value: '20', label: '20일' },
  { value: '25', label: '25일' },
  { value: '30', label: '30일' },
]

const ProfileShareModalSection = ({
  isLinkCreated,
  setPeriodDay,
  periodDay,
  profileShareData,
}: Props) => {
  const linkUrl =
    profileShareData.length > 0
      ? `https://sms.msg-team.com/student/link?token=${profileShareData[0].token}`
      : ''
  const linkRef = useRef<HTMLDivElement>(null)

  const copyLinkToClipboard = async () => {
    if (linkRef.current) {
      await navigator.clipboard.writeText(linkUrl)
    }
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeriodDay(parseInt(event.target.value))
  }

  return (
    <S.ModalSectionContainer>
      <S.ModalExpirationContainer>
        {isLinkCreated && profileShareData.length > 0 ? (
          <S.ModalViewLinkContainer>
            <S.ModalViewLinkText ref={linkRef}>{linkUrl}</S.ModalViewLinkText>
            <S.ModalViewLinkCopy onClick={copyLinkToClipboard}>
              복사
            </S.ModalViewLinkCopy>
          </S.ModalViewLinkContainer>
        ) : (
          expirationOptions.map((option) => (
            <Radio
              key={option.value}
              value={option.value}
              label={option.label}
              checked={periodDay === parseInt(option.value)}
              onChange={handleRadioChange}
            />
          ))
        )}
      </S.ModalExpirationContainer>
    </S.ModalSectionContainer>
  )
}

export default ProfileShareModalSection
