import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");

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
`;

export default GlobalStyle;
