import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme['gray-900']};
        color: ${({ theme }) => theme['gray-300']};
        -webkit-font-smoothing: antialiased;
    }

    border-style, input-security, textarea, button, label, span, table, h1, h2, h3, h4, h5 {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1rem;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
    }
`
