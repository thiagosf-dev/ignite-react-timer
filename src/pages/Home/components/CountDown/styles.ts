import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-size: 10rem;
  font-family: 'Roboto Mono', monospace;
  line-height: 8rem;
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme['gray-100']};

  span {
    font-size: 10rem;
    padding: 2rem 1rem;
    border-radius: 8px;
    background: ${({ theme }) => theme['gray-700']};
  }
`

export const Separator = styled.div`
  font-size: 10rem;
  padding: 2rem 0;
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme['green-500']};
`
