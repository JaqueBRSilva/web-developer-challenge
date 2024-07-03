import styled from "styled-components";

export const ImageUploadView = styled.div`
    display: flex;
    justify-content: center;
`

export const ImageUploadPicContainer = styled.picture`
    width: 80px;
    height: 80px;
    display: flex;
    border: 1px var(--grey) solid;
    border-radius: 2rem;

    &:hover {
        background: var(--light-black)
    }
`

export const ImageUploadSelf = styled.img`
    object-fit: center;
    width: 100%;
    height: 100%;
    border-radius: 40%;
`

export const ImageUploadButton = styled.button`
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
`