import './shiftPostpone.scss';
import { useEffect, useState } from 'react';
import ShiftPostponerUser from './ShiftPostponeUser/ShiftPostponeUser.jsx';
import { getPostponeByIdApi } from '../../../../helpers/shift/getPostponeById.api.js';

const ShiftPostpone = ({ id, setLoading }) => {

    const [postpone, setPostpone] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getPostponeByIdApi(id);
            if (response.status === 'success') setPostpone(response.result);
            else console.error(response);
            setLoading(false);
        }; fetchData();
    }, []);

    return (
        <div className='shiftPostpone'>
            {postpone &&
                <>
                    {postpone.to === 'admin'
                        ? 'Administrador'
                        : <ShiftPostponerUser postpone={postpone} />
                    }
                </>
            }
        </div>
    );
};

export default ShiftPostpone;