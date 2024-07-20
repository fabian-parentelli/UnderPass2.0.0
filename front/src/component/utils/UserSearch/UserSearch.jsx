import './userSearch.scss';
import { useEffect, useState } from "react";
import AutoComplete from "../AutoComplete.jsx";
import { getSeekerUserApi } from "../../../helpers/users/getSeekerUser.api.js";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

const UserSearch = ({ setUser }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getSeekerUserApi();
            if (response.status === 'success') setData(response.result);
            else console.log(response);
        }; fetchData();
    }, []);

    const handleChange = (e, newValue) => newValue && setUser(newValue);

    return (
        <div className="userSearch">
            {data && <AutoComplete data={data} handleChange={handleChange} />}
            <CleaningServicesIcon className='icon' onClick={() => setUser(null)} />
        </div>
    );
};

export default UserSearch;