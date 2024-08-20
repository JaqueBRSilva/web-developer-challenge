import CardsPublishedList from "../CardsPublishedList/CardsList"
import { FeedPostsMain, FeedPostsTitleSection } from "./styles"

const FeedPosts: React.FC = () => {
    return (
        <FeedPostsMain>
            <FeedPostsTitleSection>
                Feed
            </FeedPostsTitleSection>

            <CardsPublishedList />

        </FeedPostsMain>
    )
}

export default FeedPosts