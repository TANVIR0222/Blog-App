
import {useParams} from 'react-router-dom'

const PostAComments = () => {
    const {id} = useParams() 
    return (
        <div>
            posr a comment s
        </div>
    );
};

export default PostAComments;