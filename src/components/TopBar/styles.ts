import styled from "styled-components";

export const TopBarContainer = styled.div`
    width: 100vw;
    height: 3rem;
    padding: 1.4rem 0;
    display: grid;
    place-content: center;
    background-color: var(--topbar);
    border-bottom: 1px var(--topbar-border-bottom) solid;
`

export const TopBarTitle = styled.p`
    font-size: 1.4rem;
    color: var(--topbar-title);
    font-weight: 870;
`

export const TopBarSubtitle = styled.p`
    font-size: 0.75rem;
    color: var(--topbar-subtitle);
    font-weight: 200;
`
