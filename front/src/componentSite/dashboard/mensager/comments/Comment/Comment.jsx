import './comment.scss';
import { useState } from 'react';
import Load from '../../../../../component/utils/Load';
import CommentAmount from '../CommentAmount/CommentAmount';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Pager from '../../../../../component/utils/Pager/Pager';
import Title from '../../../../../component/dashboard/Title/Title';
import CommentsTable from '../CommentsTable/CommentsTable';

const Comment = () => {

    const [type, setType] = useState(null);
    const [comments, setComments] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pager, setPager] = useState(null);

    const handleChangePage = (page) => setPager(page);

    return (
        <div className='comment'>
            <Title Icon={ChatBubbleIcon} name='Comentarios' />
            <CommentAmount setComments={setComments} setLoading={setLoading} pager={pager} type={type} setType={setType} />
            {comments && <CommentsTable comments={comments.docs} type={type} setLoading={setLoading} />}
            <Pager users={comments} HandleChangePage={handleChangePage} />
            <Load loading={loading} />
        </div>
    );
};

export default Comment;