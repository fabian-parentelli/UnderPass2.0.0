import './comment.scss';
import CommentAmount from '../CommentAmount/CommentAmount';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Title from '../../../../../component/dashboard/Title/Title';

const Comment = () => {

    return (
        <div className='comment'>
            <Title Icon={ChatBubbleIcon} name='Comentarios' />
            <CommentAmount />
        </div>
    );
};

export default Comment;