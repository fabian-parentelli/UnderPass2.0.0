import './vewUsersDashboards.scss';
import { useEffect, useState } from 'react';
import GroupIcon from '@mui/icons-material/Group';
import Load from '../../../../component/utils/Load';
import Pager from '../../../../component/utils/Pager/Pager.jsx';
import Title from '../../../../component/dashboard/Title/Title';
import { updRoleUserApi } from '../../../../helpers/users/updRoleUser.api.js';
import { updActiveUserApi } from '../../../../helpers/users/updActiveUser.api.js';
import PrintUsers from '../../../../component/dashboard/user/PrintUsers/PrintUsers';
import { getPaginateUserApi } from '../../../../helpers/users/getPaginateUser.api.js';
import FilterUser from '../../../../component/dashboard/user/FilterUser/FilterUser.jsx';

const VewUsersDashboards = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getPaginateUserApi({});
            if (response.status === 'success') setUsers(response.result);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleRole = async (id) => {
        setLoading(true);
        const response = await updRoleUserApi(id);
        if (response.status === 'success') {
            const data = await getPaginateUserApi({});
            if (data.status === 'success') setUsers(data.result);
            else console.log(response);
        } else console.log(response);
        setLoading(false);
    };

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updActiveUserApi(id);
        if (response.status === 'success') {
            const data = await getPaginateUserApi({});
            if (data.status === 'success') setUsers(data.result);
            else console.log(response);
        } else console.log(response);
        setLoading(false);
    };

    const HandleChangePage = async (page) => {
        setLoading(true);
        const response = await getPaginateUserApi({ page: page });
        if (response.status === 'success') setUsers(response.result);
        else console.log(response);
        setLoading(false);
    };

    return (
        <div className='vewUsersDashboards'>
            <Title Icon={GroupIcon} name='Ver todos los usuarios' />
            <FilterUser setUsers={setUsers} setLoading={setLoading} />
            {users && <PrintUsers users={users} handleRole={handleRole} handleActive={handleActive} />}
            <Pager users={users} HandleChangePage={HandleChangePage} />
            <Load loading={loading} />
        </div>
    );
};

export default VewUsersDashboards;