import BasicForm from '../BasicForm/BasicForm';
import ImageUpload from '../ImageUploadButton/ImageUploadButton';
import { PostCardMainArea } from './styles';

const CardPost = () => {

    return (
        <PostCardMainArea>
            <ImageUpload />
            <BasicForm />
        </PostCardMainArea>
    )
}

export default CardPost;