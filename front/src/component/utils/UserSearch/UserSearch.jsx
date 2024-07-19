import './userSearch.scss';
import { useEffect, useState } from "react";
import { getSeekerUserApi } from "../../../helpers/users/getSeekerUser.api.js";
import AutoComplete from "../AutoComplete.jsx";

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
        </div>
    );
};

export default UserSearch;