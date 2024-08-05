import './vewPublicity.scss';
import { useEffect, useState } from 'react';
import SmartScreenIcon from '@mui/icons-material/SmartScreen';
import Title from '../../../../component/dashboard/Title/Title';
import { getAllPublicityApi } from '../../../../helpers/publicity/getAllPublicity.api';
import Load from '../../../../component/utils/Load';
import Pager from '../../../../component/utils/Pager/Pager';
import VewUpdPuiblicity from '../../../../component/dashboard/publicity/VewUpdPublicity/VewUpdPublicity';
import SearchPublicitary from '../../../../component/dashboard/publicity/SearchPublicitary/SearchPublicitary';

const VewPublicity = () => {

    const [values, setValues] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getAllPublicityApi({});
            if (response.status === 'success') setValues(response.result);
            else console.log(response);
            setLoading(false);
        }; fetchData();
    }, []);

    const HandleChangePage = async (page) => {
        const response = await getAllPublicityApi({ active: 'true', page: page });
        if (response.status === 'success') setValues(response.result);
        else console.log(response);
    };

    return (
        <div className='vewPublicity'>
            <Title Icon={SmartScreenIcon} name='Ver y modificar Publicidad' />
            <SearchPublicitary setPublicitary={setValues} setLoading={setLoading} />
            {values && <VewUpdPuiblicity publicity={values} setPublicity={setValues} setLoading={setLoading} />}
            <div style={{ marginTop: '2rem' }}>
                <Pager users={values} HandleChangePage={HandleChangePage} />
            </div>
            <Load loading={loading} />
        </div>
    );
};

export default VewPublicity;