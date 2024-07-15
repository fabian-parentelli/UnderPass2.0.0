import './priceList.scss';
import { useState } from 'react';
import FormPriceList from './FormPriceList/FormPriceList';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Load from '../../../../component/utils/Load';
import SnackbarAlert from '../../../../component/utils/SnackbarAlert';
import Exchange from '../../../../component/utils/Exchange/Exchange';

const PriceList = () => {

    const [vew, setVew] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);

    return (
        <div className='priceList'>

            <div className='priceListTitle'>
                <div>
                    <FormatListBulletedIcon style={{ fontSize: '2rem' }} />
                    <h2>Lista de Precios</h2>
                </div>
                <Exchange />
            </div>
            <div className='line'></div>

            <button className='btn btnB' onClick={() => setVew(vew === '' ? 'banner' : '')}>Banners</button>

            <div className='priceListForms'>
                <FormPriceList country='AR' vew={vew} setLoading={setLoading} setMessage={setMessage} setOpen={setOpen} />
                <FormPriceList country='UY' vew={vew} setLoading={setLoading} setMessage={setMessage} setOpen={setOpen} />
            </div>
            
            <Load loading={loading} />
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default PriceList;