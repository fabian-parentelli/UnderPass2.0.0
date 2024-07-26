import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { searchUserApi } from '../../../../../helpers/users/searchUser.api.js';
import { getPaginateUserApi } from '../../../../../helpers/users/getPaginateUser.api.js';

const SearchFilter = ({ setUsers, setLoading }) => {

    const [values, setValues] = useState('');

    const handleChange = async (e) => {
        const { value } = e.target;
        setValues(value);
        const response = await searchUserApi(value);
        if (response.status === 'success') {
            setUsers(response.userData)
        } else {
            const data = await getPaginateUserApi({});
            if (data.status === 'success') setUsers(data.result);
            else console.log(data);
        };
    };

    const handleClear = async () => {
        setValues('');
        const response = await getPaginateUserApi({});
        if (response.status === 'success') setUsers(response.result);
    };

    return (
        <div className='filterUserDiv'>
            <SearchIcon />
            <input
                type="text"
                value={values}
                onChange={handleChange}
            />
            {values && <ClearIcon onClick={handleClear} style={{cursor: 'pointer'}} />}
        </div>
    );
};

export default SearchFilter;