import './formPriceList.scss';
import ListVew from '../ListVew/ListVew.jsx';
import BannersPrice from '../BannersPrice/BannersPrice';
import flagsIcon from '../../../../../utils/flagsIcon.utils.js';
import { useLoginContext } from '../../../../../context/LoginContext.jsx';

const FormPriceList = ({ country, vew, setLoading, setMessage, setOpen }) => {

    const { user } = useLoginContext();

    console.log(user.data.role);

    return (
        <div className='formPriceList'>

            {country === 'UY'
                ? <div className='formPriceListFlags'>
                    <img width="30" height="30" src={flagsIcon.uy} alt="uruguay" />
                    <h3>Uruguay</h3>
                </div>
                : <div className='formPriceListFlags'>
                    <img width="30" height="30" src={flagsIcon.ar} alt="argentina" />
                    <h3>Argentina</h3>
                </div>
            }

            {vew === '' && <ListVew country={country} setLoading={setLoading} />}
            {vew === 'banner' && user.data.role === 'master' &&
                <BannersPrice country={country} setLoading={setLoading} setMessage={setMessage} setOpen={setOpen} />
            }
        </div>
    );
};

export default FormPriceList;