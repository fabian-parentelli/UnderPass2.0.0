import './underMarketLog.scss';
import UnderMarketFont from '../UnderMarketFont/UnderMarketFont';

const UnderMarketLog = ({ size, color }) => {

    return (
        <div className='underMarketLog' style={{width: `${size}0` * 8 }}>

            <div className='underNewsLog'>
                <img width={`${size}00` / 2} src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1727373458/images/mkgyolv4eryynhmvt7fc.png" alt="img" />
                <div className='underNewsText'>
                    <UnderMarketFont size={size} color={color} />
                </div>
            </div>

        </div>
    );
};

export default UnderMarketLog;