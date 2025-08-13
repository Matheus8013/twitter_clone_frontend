const theme = {
    test: "blue",
    colors: {
        primary: '#1DA1F2',        // Cor principal do Twitter
        secondary: '#14171A',      // Cor de texto escura
        background: '#0a0a0a',     // Cor de fundo escura
        text: '#D9D9D9',           // Cor de texto clara
        lightGray: '#AAB8C2',      // Cinza claro para bordas e ícones
        darkGray: '#657786',       // Cinza escuro para detalhes
        red: '#E0245E',            // Cor de destaque para ações (ex: curtir)
    },
    fonts: {
        main: 'Arial, sans-serif', // Defina sua fonte principal
    },
    spacing: {
        small: '8px',
        medium: '12px',
        large_medium: '16px',
        large: '24px',
    }
} as const ;

export type Theme = typeof theme;
export default theme;