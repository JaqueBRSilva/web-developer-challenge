import { useState } from "react"
import { POSTS_DATA } from "../../data/postsData"
import { CardPublished_Props } from "../../types/Post"
import CardsList from "../CardsList/CardsList"
import { FeedPostsMain, FeedPostsTitleSection } from "./styles"

const FeedPosts: React.FC = () => {
    const [loadedPosts, setLoadedPosts] = useState(POSTS_DATA)

    const handleDeleteCardPost = (postID: string) => {
        let deletePostSelected = loadedPosts.filter((card: { id: string }) => card.id != postID)
        return setLoadedPosts(deletePostSelected)
    }

    return (
        <FeedPostsMain>
            <FeedPostsTitleSection>
                Feed
            </FeedPostsTitleSection>
            {
                loadedPosts.map((cardData: CardPublished_Props) => (
                    <CardsList
                        key={cardData.id}
                        deletePostButton={() => handleDeleteCardPost(cardData.id)}
                        cardPublishedImage={cardData.cardPublishedImage}
                        cardPublishedText={cardData.cardPublishedText}
                        cardPublishedAuthor={cardData.cardPublishedAuthor}
                    />
                ))
            }
        </FeedPostsMain>
    )
}

export default FeedPosts