import './sitePageGaleryVew.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SitePageGaleryVew = ({ img, handleOpen, vew }) => {

    return (
        <div className='sitePageGaleryVew'>
            <img
                src={img.url}
                alt={img.name}
                className={img.name}
                style={{ objectPosition: img.position }}
            />
            {vew.index > 0 &&

                <ArrowBackIosIcon
                    className='sitePageGaleryVewarrow sitePageGaleryVewarrowL'
                    onClick={() => handleOpen(vew.index - 1)}
                />
            }
            {vew.index < 6 &&
                <ArrowForwardIosIcon
                    className='sitePageGaleryVewarrow sitePageGaleryVewarrowR'
                    onClick={() => handleOpen(vew.index + 1)}
                />
            }
        </div>
    );
};

export default SitePageGaleryVew;