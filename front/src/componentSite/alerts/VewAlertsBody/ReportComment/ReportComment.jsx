import { useEffect, useState } from 'react';
import { getMessageByIdApi } from '../../../../helpers/message/getMessageById.api.js';
import CommentsTable from '../../../dashboard/mensager/comments/CommentsTable/CommentsTable';

const ReportComment = ({ id, setLoading, type }) => {

    const [comments, setComments] = useState([]);
    const realType = type.split('_')[1]

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getMessageByIdApi(id, realType);
            if (response.status === 'success') setComments(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='reportComment'>
            {comments && <CommentsTable comments={comments} type={realType} setLoading={setLoading} />}
        </div>
    );
};

export default ReportComment;