import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Reset CSS */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Poppins", sans-serif;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    a {
        text-decoration: none;
    }

    *:focus {
        outline: none;
    }
`;

export default GlobalStyle;
