import { useState } from "react"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { POSTS_DATA } from "../../data/postsData"
import { CardPublished_Props } from "../../types/Post"
import { CardPublishedAuthorPost, CardPublishedButtonContainer, CardPublishedContentAlign, CardPublishedContentView, CardPublishedDeleteButton, CardPublishedGroupTexts, CardPublishedImage, CardPublishedInfoSendBy, CardPublishedListContainer, CardPublishedPicture, CardPublishedTextPost, ContentRowAlign } from "./styles"


const CardsPublishedList = () => {
   const [temporaryPosts, setTemporaryPost] = useState(POSTS_DATA)

   const handleDeleteCardPost = (postID: string) => {
      let deletePostSelected = temporaryPosts.filter((card) => card.id != postID)
      return setTemporaryPost(deletePostSelected)
   }

   return (
      <CardPublishedListContainer>
         {
            temporaryPosts.map((cardData: CardPublished_Props) => (
               <CardPublishedContentView key={cardData.id}>

                  <CardPublishedButtonContainer>
                     <CardPublishedDeleteButton
                        onClick={() => handleDeleteCardPost(cardData.id)}
                     >
                        <IoIosCloseCircleOutline
                           color={'#A54D27'}
                           size={23}
                        />
                     </CardPublishedDeleteButton>
                  </CardPublishedButtonContainer>

                  <CardPublishedContentAlign>
                     <CardPublishedPicture>
                        <CardPublishedImage
                           alt='imagem ilustrativa da postagem'
                           src={cardData.cardPublishedImage}
                        />
                     </CardPublishedPicture>

                     <CardPublishedGroupTexts>
                        <CardPublishedTextPost>
                           {cardData.cardPublishedText}
                        </CardPublishedTextPost>

                        <CardPublishedInfoSendBy>
                           Enviado por
                        </CardPublishedInfoSendBy>

                        <CardPublishedAuthorPost>
                           {cardData.cardPublishedAuthor}
                        </CardPublishedAuthorPost>
                     </CardPublishedGroupTexts>

                  </CardPublishedContentAlign>

               </CardPublishedContentView>
            ))
         }

      </CardPublishedListContainer>
   )
}

export default CardsPublishedList