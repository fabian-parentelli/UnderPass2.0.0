import './codeMain.scss';
import { useState } from 'react';
import CodeVew from '../CodeVew/CodeVew';
import CodeNew from '../CodeNew/CodeNew';
import CodeNull from '../CodeNull/CodeNull';
import CodeIcon from '@mui/icons-material/Code';
import Title from '../../../../../component/dashboard/Title/Title';
import Load from '../../../../../component/utils/Load';

const CodeMain = () => {

    const [vew, setVew] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleVew = (v) => setVew(v === vew ? null : v);

    return (
        <div className='codeMain'>

            <Title Icon={CodeIcon} name='Código' />

            <section className='codeMainButtons'>
                <button className='btn btnB' onClick={() => handleVew('add')}>Agregar</button>
                <button className='btn btnB' onClick={() => handleVew('vew')}>Ver</button>
            </section>

            {vew === null && <CodeNull />}
            {vew === 'add' && <CodeNew setVew={setVew} setLoading={setLoading} />}
            {vew === 'vew' && <CodeVew setLoading={setLoading} setVew={setVew} />}
            <Load loading={loading} />
        </div>
    );
};

export default CodeMain;