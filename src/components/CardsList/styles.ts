import styled from "styled-components";

export const CardPublishedListContainer = styled.div`
`

export const CardPublishedContentView = styled.div`
    min-height: 200px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    background: var(--mid-black);
    border: 1px var(--grey) solid;
    border-radius: 4px;

    @media screen and (min-width: 576px) {
        width: 64vw;
        max-width: 488px;
    }
`

export const CardPublishedButtonContainer = styled.div`
    display: flex;
    justify-content: end;
`

export const CardPublishedDeleteButton = styled.button`
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    border-radius: 50%;

    &:hover {
        background: var(--delete-card-btn-hover);
    }
`

export const CardPublishedContentAlign = styled.div`
    display: grid;
    justify-items: center;
    gap: 1.2rem;
    padding: 1rem;

    @media screen and (min-width: 576px) {
        display: flex;
        gap: 1.8rem;
    }
`

export const CardPublishedPicture = styled.picture`
    width: 80px;
    height: 80px;
    display: flex;
    border: 1px var(--grey) solid;
    border-radius: 2rem;
`

export const CardPublishedImage = styled.img`
    object-fit: center;
    min-width: 100%;
    height: 100%;
    border-radius: 40%;
`

export const CardPublishedTextPost = styled.p`
    color: var(--mid-grey);
    font-size: 1rem;
    text-align: left;
`

export const CardPublishedInfoSendBy = styled.p`
    color: var(--light-grey);
    font-size: 0.7rem;
    font-weight: bold;
    margin-top: 1.5rem;
`

export const CardPublishedAuthorPost = styled.p`
    color: var(--mid-grey);
    font-size: 0.9rem;
    font-weight: 400;
`

export const CardPublishedGroupTexts = styled.div`
    display: grid;
`