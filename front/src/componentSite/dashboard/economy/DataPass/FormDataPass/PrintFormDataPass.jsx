import './printFormDataPass.scss';
import XIcon from '@mui/icons-material/X';
import PersonIcon from '@mui/icons-material/Person';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import flagsIcon from '../../../../../utils/flagsIcon.utils.js';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const PrintFormDataPass = ({ country, values, setValues }) => {

    const handleChange = (e) => setValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }));

    return (
        <div className='printFormDataPass'>

            <div className='printFormDataPassTitle'>
                <img style={{ width: '30px' }} src={country && country === 'AR' ? flagsIcon.ar : flagsIcon.uy} alt={country} />
                <h2>{country && country === 'AR' ? 'Argentina' : 'Uruguay'}</h2>
            </div>

            <h4>Financiera</h4>

            <div className='printFormDataPassInputsDiv'>
                <div className='printFormDataPassInputsDivIn'>
                    <AccountBalanceIcon style={{ color: '#00B1EA', fontSize: '23px' }} />
                    <label>Alias de cuenta</label>
                </div>
                <input type="text" name='bankingAlias' onChange={handleChange} value={values.bankingAlias} />
            </div>

            <div className='printFormDataPassInputsDiv'>
                <div className='printFormDataPassInputsDivIn'>
                    <PersonIcon style={{ color: '#f45c14', fontSize: '23px' }} />
                    <label>Titular de cuenta</label>
                </div>
                <input type="text" name='accountHolder' onChange={handleChange} value={values.accountHolder} />
            </div>

            <div className='printFormDataPassInputsDiv'>
                <div className='printFormDataPassInputsDivIn'>
                    <ApartmentIcon style={{ color: '#00756F', fontSize: '23px' }} />
                    <label>Entidad Bancaria</label>
                </div>
                <input type="text" name='bank' onChange={handleChange} value={values.bank} />
            </div>

            <div className='printFormDataPassInputsDiv'>
                <div className='printFormDataPassInputsDivIn'>
                    <TrendingUpIcon style={{ color: 'magenta', fontSize: '23px' }} />
                    <label>Rendimiento Anual %</label>
                </div>
                <input type="text" name='perfomance' onChange={handleChange} value={values.perfomance} />
            </div>

            <div className='line'></div>

            <h4>Teléfono</h4>

            <div className='printFormDataPassInputsDiv'>
                <div className='printFormDataPassInputsDivIn'>
                    <WhatsAppIcon style={{ color: '#25D366', fontSize: '23px' }} />
                    <label>Teléfono</label>
                </div>
                <input type="phone" name='phone' onChange={handleChange} value={values.phone} />
            </div>

            <div className='line'></div>

            <h4>Redes Sociales</h4>

            <div className='printFormDataPassInputsDiv'>
                <div className='printFormDataPassInputsDivIn'>
                    <InstagramIcon style={{ color: '#E1306C', fontSize: '23px' }} />
                    <label>Instagrame</label>
                </div>
                <input type="text" name='instagrame' onChange={handleChange} value={values.instagrame} />
            </div>

            <div className='printFormDataPassInputsDiv'>
                <div className='printFormDataPassInputsDivIn'>
                    <FacebookIcon style={{ color: '#1877F2', fontSize: '23px' }} />
                    <label>Facebook</label>
                </div>
                <input type="text" name='facebook' onChange={handleChange} value={values.facebook} />
            </div>

            <div className='printFormDataPassInputsDiv'>
                <div className='printFormDataPassInputsDivIn'>
                    <YouTubeIcon style={{ color: '#FF0000', fontSize: '23px' }} />
                    <label>YouTube</label>
                </div>
                <input type="text" name='youtube' onChange={handleChange} value={values.youtube} />
            </div>

            <div className='printFormDataPassInputsDiv'>
                <div className='printFormDataPassInputsDivIn'>
                    <XIcon style={{ color: '#000000', fontSize: '23px' }} />
                    <label>Ex Twitter</label>
                </div>
                <input type="text" name='twitter' onChange={handleChange} value={values.twitter} />
            </div>

        </div>
    );
};

export default PrintFormDataPass;