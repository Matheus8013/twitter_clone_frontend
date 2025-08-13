import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
            lightGray: string;
            darkGray: string;
            red: string;
        };
        fonts: {
            main: string;
        };
        spacing: {
            small: string;
            medium: string;
            large: string;
        };
    }
}