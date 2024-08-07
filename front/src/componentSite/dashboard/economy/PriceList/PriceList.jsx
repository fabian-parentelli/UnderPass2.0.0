import './priceList.scss';
import { useState } from 'react';
import FormPriceList from './FormPriceList/FormPriceList';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Load from '../../../../component/utils/Load';
import SnackbarAlert from '../../../../component/utils/SnackbarAlert';
import Title from '../../../../component/dashboard/Title/Title';
import Checkboxes from '../../../../component/utils/Checkboxes';

const PriceList = () => {

    const [vew, setVew] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [type, setType] = useState('');

    return (
        <div className='priceList'>
            <Title Icon={FormatListBulletedIcon} name='Lista de precios' />

            <div className='priceListTop'>
                <button className='btn btnB' onClick={() => setVew(vew === '' ? 'banner' : '')}>
                    {vew ? 'Ver lista' : 'Crear'}
                </button>
                {vew &&
                    <div className='priceListLabels'>
                        <Checkboxes labels={['banners', 'separator', 'cards', 'events', 'products', 'shifts']} setType={setType} />
                    </div>
                }
            </div>

            <div className='priceListForms'>
                <FormPriceList country='AR' vew={vew} setLoading={setLoading} setMessage={setMessage} setOpen={setOpen} type={type} />
                <FormPriceList country='UY' vew={vew} setLoading={setLoading} setMessage={setMessage} setOpen={setOpen} type={type} />
            </div>

            <Load loading={loading} />
            <SnackbarAlert message={message} open={open} />
        </div>
    );
};

export default PriceList;