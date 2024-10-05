import { useEffect, useState } from 'react';
import './PublicityOff.scss';
import { getPublicityByIdApi } from '../../../../helpers/publicity/getPublicityById.api';
import PublicityTable from '../../../../component/advertisting/publicity/PublicityTable/PublicityTable';

const PublicityOff = ({ id, setLoading }) => {

    const [publicity, setPublicity] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getPublicityByIdApi(id);
            if (response.status === 'success') setPublicity([response.result]);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);


    return (
        <div className='PublicityOff'>
            <PublicityTable publicity={publicity} setLoading={setLoading} />
        </div>
    );
};

export default PublicityOff;