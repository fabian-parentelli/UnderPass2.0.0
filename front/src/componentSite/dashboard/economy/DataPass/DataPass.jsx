import './dataPass.scss';
import { useState } from 'react';
import Load from '../../../../component/utils/Load';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Title from '../../../../component/dashboard/Title/Title';
import FormDataPass from './FormDataPass/FormDataPass';

const DataPass = () => {

    const [loading, setLoading] = useState(false);

    return (
        <>
            <div className='dataPass'>
                <Title Icon={TextSnippetIcon} name='UnderDatos' />
                <div className='dataPassDiv'>
                    <FormDataPass country={'AR'} setLoading={setLoading} />
                    <FormDataPass country={'UY'} setLoading={setLoading} />
                </div>
            </div>
            <Load loading={loading} />
        </>
    );
};

export default DataPass;