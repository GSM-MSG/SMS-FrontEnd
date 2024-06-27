import styled from '@emotion/styled'

export const Wrapper = styled.section`
  background: #fff;
  border-radius: 1rem;
  max-width: 44rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Title = styled.h2`
  ${({ theme }) => theme.title1}
`

export const FileList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const File = styled.li`
  padding: 0.75rem 1rem;
  background: var(--N10);
  border: 1px solid var(--N20);
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  button {
    ${({ theme }) => theme.body1}
  }
`

export const FileInfo = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`

export const Icon = styled.figure`
  width: 2.5rem;
  height: 2.5rem;
  min-width: 2.5rem;
  min-height: 2.5rem;
  border-radius: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FileName = styled.p`
  ${({ theme }) => theme.body1}
  display: -webkit-box;
  color: var(--N50);
  word-break: break-word;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
