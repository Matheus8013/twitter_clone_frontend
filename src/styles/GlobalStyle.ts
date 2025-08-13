import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  /* Estilos Globais para o corpo */
    body {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: ${({ theme }) => theme.fonts.main};
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

  /* Estilos básicos para links e botões */
    a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }
`;