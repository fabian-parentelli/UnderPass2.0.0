import './newsTableB.scss';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const NewsTableB = ({  handleValues }) => {

    return (
        <div className='newsTableB'>

            <div className='newsTableCdiv'>
                <LanguageIcon className='iconNews' style={{ color: '#004aad' }} />
                <input
                    type="text" name='webSite' placeholder='Sitio web'
                    onChange={handleValues}
                />
            </div>

            <div className='newsTableCdiv'>
                <InstagramIcon className='iconNews' style={{ color: '#E1306C' }} />
                <input
                    type="text" name='instagrame' placeholder='Instagrame'
                    onChange={handleValues}
                />
            </div>

            <div className='newsTableCdiv'>
                <FacebookIcon className='iconNews' style={{ color: '#1877F2' }} />
                <input
                    type="text" name='facebook' placeholder='Facebook'
                    onChange={handleValues}
                />
            </div>

            <div className='newsTableCdiv'>
                <XIcon className='iconNews' style={{ color: '#000000' }} />
                <input
                    type="text" name='twetter' placeholder='X'
                    onChange={handleValues}
                />
            </div>

            <div className='newsTableCdiv'>
                <YouTubeIcon className='iconNews' style={{ color: '#FF0000' }} />
                <input
                    type="text" name='youtube' placeholder='YouTube'
                    onChange={handleValues}
                />
            </div>
            
        </div>
    );
};

export default NewsTableB;