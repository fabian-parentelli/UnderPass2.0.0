import './comment.scss';
import { useState } from 'react';
import Load from '../../../../../component/utils/Load';
import CommentsTable from '../CommentsTable/CommentsTable';
import CommentAmount from '../CommentAmount/CommentAmount';
import CommentFilter from '../CommentFilter/CommentFilter';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Pager from '../../../../../component/utils/Pager/Pager';
import Title from '../../../../../component/dashboard/Title/Title';

const Comment = () => {

    const [type, setType] = useState(null);
    const [comments, setComments] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pager, setPager] = useState(null);
    const [isActive, setIsActive] = useState(true);
    const [onlyReport, setOnlyReport] = useState(false);

    const handleChangePage = (page) => setPager(page);

    return (
        <div className='comment'>
            <Title Icon={ChatBubbleIcon} name='Comentarios' />
            <CommentAmount setComments={setComments} setLoading={setLoading} pager={pager} type={type} setType={setType} isActive={isActive} onlyReport={onlyReport} />
            <CommentFilter isActive={isActive} setIsActive={setIsActive} onlyReport={onlyReport} setOnlyReport={setOnlyReport} />
            {comments && <CommentsTable comments={comments.docs} type={type} setLoading={setLoading} />}
            <Pager users={comments} HandleChangePage={handleChangePage} />
            <Load loading={loading} />
        </div>
    );
};

export default Comment;