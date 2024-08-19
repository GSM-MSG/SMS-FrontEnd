import PDFViewer from '@features/student/molecules/PDFViewer'
import * as S from './style'

interface Props {
  portfolioFileUrl: string | undefined
}

const PortfolioTemplate = ({ portfolioFileUrl }: Props) => {
  return (
    <S.Wrapper>
      {portfolioFileUrl ? <PDFViewer pdfUrl={portfolioFileUrl} /> : null}
    </S.Wrapper>
  )
}

export default PortfolioTemplate
