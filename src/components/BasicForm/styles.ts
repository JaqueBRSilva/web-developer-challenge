import styled from "styled-components";

export const FormContainer = styled.form``;

export const InputsContainer = styled.div`
    display: grid;
    gap: 8%;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;

export const NameInputTxt = styled.input`
    height: 1.6rem; 
`;

export const MessageInputTxt = styled.textarea`
    text-align: justify;
`;

export const GroupButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1.1rem;
`;

export const DiscardButton = styled.button`
    background: transparent;
    border: none;
    color: var(--light-grey);
    text-decoration: underline;

    &:hover {
        color: var(--mid-grey);
    }
`;

export const PublishButton = styled.button`
    background: var(--light-grey);
    border: none;
    color: var(--mid-black);
    border-radius: 8px;
    width: 6rem;
    height: 2.6rem;

    &:hover {
        background: var(--mid-grey);
    }
`;
