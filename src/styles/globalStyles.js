import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
    :root{
        --primary-color: #24AE60;
        --primary-color-50: #93D7AF;
        --secondary-color: #EB5757;
        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;
        --negative: #E60000;
        --warning: #FFCD07;
        --success: #168821;
        --information: #155BCB;
        --btn-radius: 8px;
    }
    button:hover{
        cursor: pointer;
    }
`