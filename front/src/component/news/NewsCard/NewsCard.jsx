import './newsCard.scss';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';

const NewsCard = ({ news }) => {

    return (
        <div className='newsCard'>

            <Link to={`/uniquenews/${news._id}`} className='newsCardLink'>
                <h2>{news.title}</h2>
                <div className='newsCardImgDiv'>
                    <img src={news.img[0]} alt="img" />
                </div>
                <p className='newsCardSubText'>{news.subText}</p>
            </Link>

            <div className='newsCardSocialMedia'>
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
        </div>
    );
};

export default NewsCard;