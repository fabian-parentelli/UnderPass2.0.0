import './commentsVew.scss';

const CommentsVew = ({ comments }) => {
    
    return (
        <div className='commentsVew'>
            {comments && comments.map((com) => (
                <div className='messageVewDiv' key={com._id}
                    style={{ backgroundColor: com.report.length > 0 ? '#fdcdcc' : null }}
                >
                    <img src={com.userId.avatar[0]} alt="img" />
                    <div className='messageVewText'>
                        <p>{com.text}</p>
                        <p>{com.userId.name} - {new Date(com.date).toLocaleDateString()}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentsVew;