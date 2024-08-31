import './cash.scss';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Title from '../../../../component/dashboard/Title/Title';
import { useState } from 'react';
import flagsIcon from '../../../../utils/flagsIcon.utils';
import BodyCashDas from './BodyCashDas/BodyCasDas';
import Load from '../../../../component/utils/Load';

const Cash = () => {

    const [type, setType] = useState('');
    const handleClik = (id) => setType(type === id ? '' : id);
    const [loading, setLoading] = useState(false);

    return (
        <div className='cashDas'>
            <Title Icon={PointOfSaleIcon} name='Caja' />

            <div className='cashDasBtnDiv'>
                <div className='cashDasBtn' onClick={() => handleClik('AR')} style={{ backgroundColor: type === 'AR' && '#b9bec9' }}>
                    <img className='cashDasImg' src={flagsIcon.ar} alt="AR" />
                    <p>Argentina</p>
                </div>
                <div className='cashDasBtn' onClick={() => handleClik('UY')} style={{ backgroundColor: type === 'UY' && '#b9bec9' }}>
                    <img className='cashDasImg' src={flagsIcon.uy} alt="UY" />
                    <p>Uruguay</p>
                </div>
            </div>

            <BodyCashDas country={type} setLoading={setLoading} />

            <Load loading={loading} />
        </div>
    );
};

export default Cash;