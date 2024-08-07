import './formPriceList.scss';
import ListVew from '../ListVew/ListVew.jsx'
import NewPrice from '../NewPrice/NewPrice.jsx';
import flagsIcon from '../../../../../utils/flagsIcon.utils.js';
import { useLoginContext } from '../../../../../context/LoginContext.jsx';

const FormPriceList = ({ country, vew, setLoading, setMessage, setOpen, type }) => {

    const { user } = useLoginContext();
    
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

            {vew === 'banner' && user.data.role === 'master' && type &&
                <NewPrice country={country} setLoading={setLoading} setMessage={setMessage} setOpen={setOpen} type={type} />
            }
        </div>
    );
};

export default FormPriceList;