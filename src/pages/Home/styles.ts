import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  color: ${({ theme }) => theme['gray-100']};
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-ms-calendar-button {
    display: none;
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

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

export const StartCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
