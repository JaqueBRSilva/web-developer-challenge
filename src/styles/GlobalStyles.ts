import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --light-black: #343434;
        --mid-black: #313131;
        --grey: #494949;
        --red-orange: #A54D27;
        

        background-color: var(--light-black);
        box-sizing: border-box;
        margin: 3rem;

        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;


        @media screen and (min-width: 992px) {
            margin: 0 10rem;
        }
    }

    * {
        margin: 0;
        padding: 0;
    }
`;