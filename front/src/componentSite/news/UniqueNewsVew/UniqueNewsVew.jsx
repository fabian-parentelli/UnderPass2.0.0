import './uniqueNewsVew.scss';
import { Link } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import Today from '../../../component/utils/Today/Today';
import InstagramIcon from '@mui/icons-material/Instagram';
import VideosVew from '../../../component/utils/VideosVew';
import Messages from '../../../component/messages/Messages/Messages';
import UnderNewsLog from '../../../component/fonts/UnderNewsLog/UnderNewsLog';

const UniqueNewsVew = ({ news }) => {

    return (
        <div className='uniqueNewsVew'>
            <div className='uniqueNewsVewTop'>
                <Today date={news.date} />
                <p>{news.location.city} - {news.location.province}</p>
            </div>
            <h2>{news.title}</h2>
            <p className='uniqueNewsVewSubText'>{news.subText}</p>
            <img className='uniqueNewsVewImg0' src={news.img[0]} alt="img" />
            <p className='uniqueNewsVewText'>{news.text}</p>
            <div className='uniqueNewsVewVideo'>
                <img className='uniqueNewsVewImg1' src={news.img[1]} alt="img" />
                {news.video
                    ? <div className='uniqueNewsVewImg1'><VideosVew url={news.video} /></div>
                    : <img className='uniqueNewsVewImg1' src={news.img[2]} alt="img" />
                }
            </div>
            <div className='uniqueNewsVewSocialMedia'>
                {news.webSite &&
                    <Link to={`/site/${news.webSite}`} style={{ color: 'gray' }} >
                        <LanguageIcon className='uniqueNewsVewIcon' />
                    </Link>
                }
                {news.socialMedia?.instagrame &&
                    <a href={news.socialMedia.instagrame} target='_blank' style={{ color: 'gray' }}>
                        <InstagramIcon className='uniqueNewsVewIcon' />
                    </a>
                }
                {news.socialMedia?.facebook &&
                    <a href={news.socialMedia.facebook} target='_blank' style={{ color: 'gray' }}>
                        <FacebookIcon className='uniqueNewsVewIcon' />
                    </a>
                }

                {news.socialMedia?.twetter &&
                    <a href={news.socialMedia.twetter} target='_blank' style={{ color: 'gray' }}>
                        <XIcon className='uniqueNewsVewIcon' />
                    </a>
                }
                {news.socialMedia?.youtube &&
                    <a href={news.socialMedia.youtube} target='_blank' style={{ color: 'gray' }}>
                        <YouTubeIcon className='uniqueNewsVewIcon' />
                    </a>
                }
            </div>

            {/* Componente de mensjaes */}

            <div className='uniqueNewsVewBy'>
                <div style={{textDecoration: 'none'}}>
                    <UnderNewsLog size={2} />
                    <p style={{color: 'gray'}}>Por {news.sign}.</p>
                </div>
            </div>

            <Messages type='news' typeId={news._id} />

        </div>
    );
};

export default UniqueNewsVew;