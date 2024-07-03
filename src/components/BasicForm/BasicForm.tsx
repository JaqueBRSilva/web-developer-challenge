import { useState } from "react"
import { DiscardButton, FormContainer, GroupButtonsContainer, InputsContainer, MessageInputTxt, NameInputTxt, PublishButton } from "./styles"

const BasicForm = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleDiscardContent = () => {
        setName('')
        setMessage('')
        return
    }

    const handlePostContent = () => {
    }

    return (
        <FormContainer>
            <InputsContainer>
                <NameInputTxt
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={name => setName(name.target.value)}
                    autoCapitalize="true"
                    minLength={3}
                />

                <MessageInputTxt
                    placeholder="Mensagem"
                    value={message}
                    onChange={msg => setMessage(msg.target.value)}
                    rows={3}
                />
            </InputsContainer>

            <GroupButtonsContainer>
                <DiscardButton onClick={handleDiscardContent} >
                    Descartar
                </DiscardButton>

                <PublishButton onClick={handlePostContent} >
                    Publicar
                </PublishButton>
            </GroupButtonsContainer>
        </FormContainer>
    )
}

export default BasicForm