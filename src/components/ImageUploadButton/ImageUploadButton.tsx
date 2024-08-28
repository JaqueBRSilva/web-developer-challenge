import { ChangeEvent, useState } from 'react';
import {
  ImageFileInput,
  ImageSelected,
  ImageUploadIcon,
  ImageUploadIconContainer,
  ImageUploadPicContainer,
  ImageUploadSelf,
  ImageUploadView
} from './styles';

const ImageUpload = () => {
  const [imageSelected, setImageSelected] = useState(null)

  const handleSelectImageForUpload = (event: ChangeEvent) => {
    if (!event.target.files) {
      return
    }

    const imageFile = event.target.files[0]

    if (!imageFile) {
      return

    } else {
      return setImageSelected(imageFile)

    }

  }

  return (
    <ImageUploadView>
      <ImageUploadPicContainer>

        <ImageFileInput
          id="image-input"
          type="file"
          accept="image/*"
          onChange={handleSelectImageForUpload}
        />

        <ImageUploadSelf htmlFor="image-input">
          {imageSelected ? (

            <ImageSelected
              src={URL.createObjectURL(imageSelected)}
              alt='Imagem selecionada'
            />

          ) : (

            <ImageUploadIconContainer>
              <ImageUploadIcon size={26} />
            </ImageUploadIconContainer>

          )}
        </ImageUploadSelf>

      </ImageUploadPicContainer>
    </ImageUploadView>
  )
}

export default ImageUpload;