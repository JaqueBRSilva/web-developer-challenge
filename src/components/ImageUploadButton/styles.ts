import { PiImageThin } from "react-icons/pi";
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
    border-radius: 40%;

    &:hover {
        background: var(--light-black);
    }
`

export const ImageFileInput = styled.input`
    display: none;
`

export const ImageUploadSelf = styled.label`
    flex: 1;
`

export const ImageUploadIconContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const ImageUploadIcon = styled(PiImageThin)`
    color: #FFF;
`

export const ImageSelected = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 40%;
`