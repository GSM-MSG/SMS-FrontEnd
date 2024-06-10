import { DetailedHTMLProps, HTMLAttributes } from 'react'
import * as S from './style'

import Header from './Header'
import Title from './Title'
import Field from './Field'
import { ContextProvider } from './Context'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const CertificationForm = ({ ...props }: Props) => {
  return (
    <ContextProvider>
      <S.Wrapper {...props} />
    </ContextProvider>
  )
}

CertificationForm.Header = Header
CertificationForm.Title = Title
CertificationForm.Field = Field

export default CertificationForm
