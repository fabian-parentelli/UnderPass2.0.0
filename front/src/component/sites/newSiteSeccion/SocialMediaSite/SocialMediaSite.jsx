import './socialMediaSite.scss';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaSite = ({ values, handleValues }) => {


    return (
        <div className='socialMediaSite'>

            <h6>Redes Sociales y comunicación.</h6>
            <p className='socialMediaSiteGray'>Estos datos no son obligatorios, y son <span>100% públicos</span>.</p>

            <section className='socialMediaSiteSect'>

                <section className='socialMediaSiteboth'>
                    <div className='socialMediaSiteDiv'>
                        <label>Facebook</label>
                        <div>
                            <FacebookIcon className='socialMediaSiteIcon' />
                            <input type="text" name='facebook' placeholder='Opcional' onChange={handleValues} />
                        </div>
                    </div>

                    <div className='socialMediaSiteDiv'>
                        <label>X (twitter)</label>
                        <div>
                            <XIcon className='socialMediaSiteIcon' />
                            <input type="text" name='twitter' placeholder='Opcional' onChange={handleValues} />
                        </div>
                    </div>

                    <div className='socialMediaSiteDiv'>
                        <label>Youtube</label>
                        <div>
                            <YouTubeIcon className='socialMediaSiteIcon' />
                            <input type="text" name='youtube' placeholder='Opcional' onChange={handleValues} />
                        </div>
                    </div>
                </section>

                <section className='socialMediaSiteboth'>
                    <div className='socialMediaSiteDiv'>
                        <label>Instagrame</label>
                        <div>
                            <InstagramIcon className='socialMediaSiteIcon' />
                            <input type="text" name='instagrame' placeholder='Opcional' onChange={handleValues} />
                        </div>
                    </div>

                    <div className='socialMediaSiteDiv'>
                        <label>Spotify</label>
                        <div>
                            <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/spotify.png" alt="spotify" />
                            <input type="text" name='spotify' placeholder='Opcional' onChange={handleValues} />
                        </div>
                    </div>

                    <div className='socialMediaSiteDiv'>
                        <label>WhatsApp</label>
                        <div>
                            <WhatsAppIcon className='socialMediaSiteIcon' />
                            <input type="text" name='whatsApp' placeholder='Opcional' onChange={handleValues} />
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default SocialMediaSite;