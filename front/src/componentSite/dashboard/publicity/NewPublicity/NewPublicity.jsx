import './newPublicity.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Load from '../../../../component/utils/Load';
import Title from '../../../../component/dashboard/Title/Title';
import Checkboxes from '../../../../component/utils/Checkboxes';
import PublicityForm from '../../../../component/dashboard/publicity/PublicityForm/PublicityForm';

const NewPublicity = () => {

    const [type, setType] = useState('');
    const [loading, setLoading] = useState(false);
    const { appli } = useParams();

    return (
        <div className='newPublicity'>
            <Title Icon={LiveTvIcon} name='Crear publicidad' />
            <div className='newPublicityChek'>
                <Checkboxes labels={['banners', 'cards', 'separator']} setType={setType} />
            </div>
            <div className='newPublicityData'>
                {!type && <p>Medidas en píxeles</p>}
                {type && type === 'banners' && <p><strong>Banner:</strong> 2 imágenes _ (1) 1583x380px - (2) 768x250px.</p>}
                {type && type === 'cards' && <p><strong>Cards:</strong> 1 imágenes _ 250x400px</p>}
                {type && type === 'separator' && <p><strong>Separator:</strong> 2 imágenes _ (1) 1920x200px - (2) 1080x1080px.</p>}
            </div>
            {type && <PublicityForm type={type} setLoading={setLoading} setType={setType} appli={appli} />}
            <Load loading={loading} />
        </div>
    );
};

export default NewPublicity;