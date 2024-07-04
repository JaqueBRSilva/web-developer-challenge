import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --light-black: #343434;
        --mid-black: #313131;
        --grey: #494949;
        --light-grey: #5F5F5F;
        --mid-grey: #9a9a9a;

        --topbar: #2B2B2B;
        --topbar-title: #71BB00;
        --topbar-subtitle: var(--light-grey);
        --topbar-border-bottom: #232323;

        --delete-card-button: #A54D27;
        --delete-card-btn-hover: #532613;
        

        background-color: var(--light-black);
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;

        font-family: "Archivo", sans-serif, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;
        font-optical-sizing: auto;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    input, textarea {
        background: var(--grey);
        border: transparent;
        border-radius: 5px;
        padding: 5px 10px;
        color: var(--mid-grey);
        font-size: 0.72rem;
        text-align: start;

        &::placeholder {
            color: var(--mid-grey);
            font-size: 0.73rem;
            text-align: start;

        }
    }
`;