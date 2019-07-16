import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,600,700&display=swap');

    *,*::before,*::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Open Sans', sans-serif;
        background-color: #F2F3F6;
        padding-top: 2px;
        padding-bottom: 15px;
    }
`;

export default GlobalStyle;
