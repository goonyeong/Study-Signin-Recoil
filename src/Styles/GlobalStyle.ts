import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *, *::before, *::after{
        box-sizing: border-box;
    }
    html{
        font-size: 1vw;
    }
    body{
        font-family: "Font_test";
        background-color: ${({ theme }) => theme.colors.background_color};
        color: ${({ theme }) => theme.colors.text_color};
        font-size: 6rem;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
    
`;

export default GlobalStyle;
