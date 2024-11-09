import './sitePageSocialMedia.scss';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const SitePageSocialMedia = ({ site }) => {

    return (
        <div className='sitePageSocialMedia'>

            {site.socialMedia.facebook &&
                <a href={site.socialMedia.facebook} target="_blank">
                    <FacebookIcon className='sitePageSocialMediaIcon' />
                </a>
            }

            {site.socialMedia.instagrame &&
                <a href={site.socialMedia.instagrame} target="_blank">
                    <InstagramIcon className='sitePageSocialMediaIcon' />
                </a>
            }

            {site.socialMedia.twitter &&
                <a href={site.socialMedia.twitter} target="_blank">
                    <XIcon className='sitePageSocialMediaIcon' />
                </a>
            }

            {site.socialMedia.spotify &&
                <a href={site.socialMedia.spotify} target="_blank">
                    <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/spotify.png" alt="img" className='sitePageSocialMediaSpot' />
                </a>
            }

            {site.socialMedia.youtube &&
                <a href={site.socialMedia.youtube} target="_blank">
                    <YouTubeIcon className='sitePageSocialMediaIcon' />
                </a>
            }
            
            {site.socialMedia.whatsApp &&
                <a href={`https://wa.me/${site.socialMedia.whatsApp}`} target="_blank">
                    <WhatsAppIcon className='sitePageSocialMediaIcon' />
                </a>
            }

        </div>
    );
};

export default SitePageSocialMedia;