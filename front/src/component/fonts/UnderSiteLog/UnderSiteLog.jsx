import './underSiteLog.scss';
import UnderSiteFont from '../UnderSiteFont/UnderSiteFont';

const UnderSiteLog = ({ size, color }) => {

    return (
        <div className='underSiteLog' style={{ width: `${size}0` * 8 }}>

            <div className='underNewsLog'>
                <img width={`${size}00` / 2} src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1727373458/images/mkgyolv4eryynhmvt7fc.png" alt="img" />
                <div className='underNewsText'>
                    <UnderSiteFont size={size} color={color} />
                </div>
            </div>

        </div>
    );
};

export default UnderSiteLog;