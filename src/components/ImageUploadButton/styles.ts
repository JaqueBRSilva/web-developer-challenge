import styled from "styled-components";

export const ImageUploadPicContainer = styled.picture`
    width: 5.5rem;
    height: 5.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px var(--grey) solid;
    border-radius: 2.5rem;
`;

export const ImageUploadSelf = styled.img`
    object-fit: center;
    width: 100%;
    height: 100%;
    border-radius: 40%;
`;

export const ImageUploadButton = styled.button`
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
`;