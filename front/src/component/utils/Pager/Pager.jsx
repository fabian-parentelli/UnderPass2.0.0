import './pager.scss';

const Pager = ({ users, HandleChangePage }) => {

    return (
        <div className='pager'>
            {users && users.hasPrevPage === true &&
                <p className='gtppagerNextPage'
                    onClick={() => HandleChangePage(users.prevPage)}
                >
                    {users.prevPage}
                </p>
            }

            {users && users.page && <p className='gtppagerActualPage'>{users.page}</p>}

            {users && users.hasNextPage === true &&
                <p className='gtppagerNextPage'
                    onClick={() => HandleChangePage(users.nextPage)}
                >
                    {users.nextPage}
                </p>
            }
        </div>
    );
};

export default Pager;