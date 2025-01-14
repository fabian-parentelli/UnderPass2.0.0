import './codeMain.scss';
import { useState } from 'react';
import CodeVew from '../CodeVew/CodeVew';
import CodeNew from '../CodeNew/CodeNew';s
import CodeNull from '../CodeNull/CodeNull';
import CodeIcon from '@mui/icons-material/Code';
import Title from '../../../../../component/dashboard/Title/Title';

const CodeMain = () => {

    const [vew, setVew] = useState(null);

    const handleVew = (v) => setVew(v === vew ? null : v);

    return (
        <div className='codeMain'>

            <Title Icon={CodeIcon} name='Código' />

            <section className='codeMainButtons'>
                <button className='btn btnB' onClick={()=> handleVew('add')}>Agregar</button>
                <button className='btn btnB' onClick={()=> handleVew('vew')}>Ver</button>
            </section>

            {vew === null && <CodeNull /> }   
            {vew === 'add' && <CodeNew setVew={setVew} /> } 
            {vew === 'vew' && <CodeVew /> } 

        </div>
    );
};

export default CodeMain;