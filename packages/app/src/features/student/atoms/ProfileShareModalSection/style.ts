import styled from '@emotion/styled'

export const ModalSectionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2.5rem;
  box-sizing: border-box;
`

export const ModalExpirationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.4563rem;

  @media (max-width: 544px) {
    gap: 16px;
  }
`

export const ModalViewLinkContainer = styled.div`
  width: 100%;
  background: var(--N10);
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid var(--N20);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ModalViewLinkText = styled.p`
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.3125rem;
  letter-spacing: -0.002em;
  color: var(--N50);
`

export const ModalViewLinkCopy = styled.button`
  padding: 0.3125rem 1.25rem;
  border-radius: 3.5rem;
  border: 0.0625rem solid #2260ff;
  background-color: var(--WHITE);
  color: #2260ff;

  font-family: Pretendard;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.3125rem;
  letter-spacing: -0.002em;

  cursor: pointer;
`
