import { useState } from "react"
import { DiscardButton, FormContainer, GroupButtonsContainer, InputsContainer, MessageInputTxt, NameInputTxt, PublishButton } from "./styles"

const BasicForm = () => {
  const [imagePost, setImagePost] = useState(null)
  const [nameAuthor, setNameAuthor] = useState('')
  const [message, setMessage] = useState('')

  
  const handleDiscardPost = () => {
    setImagePost(null)
    setNameAuthor('')
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
        <DiscardButton type="reset"
          onClick={handleDiscardPost}
        >
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