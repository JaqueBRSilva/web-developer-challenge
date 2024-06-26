import { useState } from 'react';
import { PiImageThin } from 'react-icons/pi';
import { ImageUploadButton, ImageUploadPicContainer, ImageUploadSelf } from './styles';

const ImageUpload = () => {
  const [image, setImage] = useState('')

  const handleSelectImageForUpload = () => {
    const IMG_ALT = 'https://images.unsplash.com/photo-1433477221118-6eca20a0d62e'
    return setImage(IMG_ALT)
  }

  return (
    <ImageUploadPicContainer>
      <ImageUploadButton
        onClick={handleSelectImageForUpload}
      >
        {
          (image.length == 0) ?

            <PiImageThin
              color={"#FFF"}
              size={28}
            />

            :

            <ImageUploadSelf
              src={image}
              alt='imagem do post'
            />
        }
      </ImageUploadButton>
    </ImageUploadPicContainer>
  )
}

export default ImageUpload;