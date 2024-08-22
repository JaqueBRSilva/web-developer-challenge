import { IoIosCloseCircleOutline } from "react-icons/io"
import { CardPublished_Props } from "../../types/Post"
import {
   CardPublishedAuthorPost,
   CardPublishedButtonContainer,
   CardPublishedContentAlign,
   CardPublishedContentView,
   CardPublishedDeleteButton,
   CardPublishedGroupTexts,
   CardPublishedImage,
   CardPublishedInfoSendBy,
   CardPublishedListContainer,
   CardPublishedPicture,
   CardPublishedTextPost
} from "./styles"

const CardsList = ({ ...cardsListProps }: CardPublished_Props) => {

   return (
      <CardPublishedListContainer>
         <CardPublishedContentView key={cardsListProps.id}>

            <CardPublishedButtonContainer>
               <CardPublishedDeleteButton
                  onClick={cardsListProps.deletePostButton}
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
                     src={cardsListProps.cardPublishedImage}
                  />
               </CardPublishedPicture>

               <CardPublishedGroupTexts>
                  <CardPublishedTextPost>
                     {cardsListProps.cardPublishedText}
                  </CardPublishedTextPost>

                  <CardPublishedInfoSendBy>
                     Enviado por
                  </CardPublishedInfoSendBy>

                  <CardPublishedAuthorPost>
                     {cardsListProps.cardPublishedAuthor}
                  </CardPublishedAuthorPost>

               </CardPublishedGroupTexts>
            </CardPublishedContentAlign>
         </CardPublishedContentView>
      </CardPublishedListContainer>
   )
}

export default CardsList